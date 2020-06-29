import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { CartComponent } from './components/cart/cart.component';
import { CartIconComponent } from './components/cart/icon/cart.icon.component';
import { HeaderComponent } from './components/header/header.component';
import HomeComponent from './components/home/home.component';
import { OrdersComponent, OrderProductsDialog } from './components/orders/orders.component';
import { AuthService } from './services/auth.service';
import CartService from './services/cart.service';
import ProductService from './services/product.service';
import UserService from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CartIconComponent,
    AuthComponent,
    HeaderComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCommonModule,
    MatSelectModule,
    NgbModule
  ],
  entryComponents: [
    OrderProductsDialog
  ],
  providers: [
    ProductService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthService,
    CartService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
