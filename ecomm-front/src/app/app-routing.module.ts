import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CartComponent } from './components/cart/cart.component';
import { RouteGuard } from './route.guard';
import ProductComponent from './components/products/product.component';
import { CartIconComponent } from './components/cart/icon/cart.icon.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: AuthComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent, canActivate: [RouteGuard] },
  { path: 'refreshCartIcon', component: CartIconComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
