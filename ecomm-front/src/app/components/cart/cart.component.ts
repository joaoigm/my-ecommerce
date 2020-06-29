import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Cart from 'src/app/models/cart';
import CartProduct from 'src/app/models/cartProduct';
import CartService from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/user';
import Product from 'src/app/models/product';
import OrderService from 'src/app/services/order.service';
import Order from 'src/app/models/order';

@Component({
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cartProducts: CartProduct[]
  user: User;
  constructor(
    private cartService: CartService, 
    private authService: AuthService, 
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.cartService.getUserCart(this.authService.getUser().id).subscribe(
      res => this.cartProducts = res,
      err => console.log(err)
    );
    this.user = this.authService.getUser();
  }

  removeProduct(product: CartProduct) {
    this.cartProducts.forEach(p => {
      if(p === product)
        p.quantity = 0
    });
    this.cartService.updateCartProducts(this.user.id, this.cartProducts).subscribe(
      res => this.cartProducts = res,
      err => console.log(err),
      () => this.reloadCartIcon()
    );
  }

  quantityChanged() {
    this.cartService.updateCartProducts(this.user.id, this.cartProducts).subscribe(
      res => null,
      err => console.log(err),
      () => this.reloadCartIcon()
    );
  }

  loadQuantityArray(product: Product): number[] {
    let quantity: number[] = [];
    for(let i: number = 0; i < product.stock; i++){
        quantity.push(i+1);
    }
    return quantity;
  }

  loadTotalOrderPrice(): number {
    let total = 0;
    this.cartProducts.forEach(p => {
      total += p.product.price*p.quantity
    });
    return total;
  }

  private reloadCartIcon() {
    this.router.navigateByUrl('/refreshCartIcon', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cart', this.user.id]);
    });
  }

  confirmOrder(): void {
    this.orderService.confirmOrder(this.user.id, new Order(null, this.loadTotalOrderPrice(), null, this.cartProducts)).subscribe(
      res => {console.log(JSON.stringify(res)); alert('Pedido finalizado com sucesso'); this.router.navigate(['/']);},
      err => console.log(err)
    )
  }
}
