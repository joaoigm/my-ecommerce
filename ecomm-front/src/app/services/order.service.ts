import { Injectable } from '@angular/core';
import BaseService from './base.service';
import Order from '../models/order';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import CartProduct from '../models/cartProduct';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class OrderService extends BaseService<Order>{
    
    constructor(http: HttpClient){
        super(http, environment.order_service_url);
    }

    public confirmOrder(userId, order: Order): Observable<Order> {
        return this._http.post<Order>(environment.order_service_url.replace('{0}', userId), {
            totalPrice: order.totalPrice,
            products: this.getParsedProducts(order.products)
        }, this.getHeaders());
    }

    public getUserOrders(userId): Observable<Order[]> {
        return this._http.get<Order[]>(environment.order_service_url.replace('{0}', userId), this.getHeaders());
    }
    
    public getHeaders() {
        return {
            headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('access_key')).access_token}`
            })
        }
    }
    private getParsedProducts(products: CartProduct[]){
        let p: any[] = [];
        products.forEach(product => {
            p.push({
                product: product.product,
                quantity: product.quantity
            });
        });
        return p;
    }
}