import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import CartService from 'src/app/services/cart.service';
import Cart from 'src/app/models/cart';
import CartProduct from 'src/app/models/cartProduct';

@Component({
  selector: 'cart-icon-app',
  templateUrl: './cart.icon.component.html'
})
export class CartIconComponent implements OnInit {

  user: User
  cart: CartProduct[]
  constructor(private authService: AuthService,private cartService: CartService) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.user = this.authService.getUser();
      
      this.cartService.getUserCart(this.user.id).subscribe(
        res => this.cart = res,
        err => console.log(err)
      )
    }
  }

}
