import { Component, OnInit, Input } from '@angular/core';
import OrderService from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/user';
import Order from 'src/app/models/order';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import CartProduct from 'src/app/models/cartProduct';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user: User;
  orders: Order[];
  
  constructor(private orderService: OrderService, private authService: AuthService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.user = this.authService.getUser();
      this.orderService.getUserOrders(this.user.id).subscribe(
        res => this.orders = res,
        err => console.log(err)
      );
    }
  }

  openModal(products: CartProduct[]): void {
    const ref = this.modalService.open(OrderProductsDialog);
    ref.componentInstance.products = products;
  }

}

@Component({
  templateUrl:'./modal.html'
})
export class OrderProductsDialog {

  products: CartProduct[]

  constructor(public activeModal: NgbActiveModal) {
    console.log(this.products);
  }
}