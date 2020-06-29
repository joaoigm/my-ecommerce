import { Injectable } from "@angular/core";
import BaseService from './base.service';
import Cart from '../models/cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import CartProduct from '../models/cartProduct';
import Product from '../models/product';


@Injectable({
    providedIn: 'root'
})
export default class CartService extends BaseService<Cart> {

    
    constructor(private http: HttpClient) {
        super(http, environment.cart_service_url);
    }

    public getUserCart(userId): Observable<CartProduct[]> {
        return this._http.get<CartProduct[]>(environment.cart_service_url.replace('{0}', userId), this.getHeaders());
    }

    public updateCartProducts(userId, products: CartProduct[]): Observable<CartProduct[]> {
        return this._http.put<CartProduct[]>(environment.cart_service_url.replace('{0}', userId), this.getParsedProducts(products), this.getHeaders());
    }

    public addProductToCart(userId, product: CartProduct): Observable<CartProduct[]> {
        return this._http.post<CartProduct[]>(environment.cart_service_url.replace('{0}', userId), this.getParsedProduct(product), this.getHeaders())
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

    private getParsedProduct(product: CartProduct) {
        return {
            product: product.product,
            quantity: product.quantity
        }
    }

    private getParsedProducts(products: CartProduct[]){
        let p: any[] = [];
        products.forEach(product => {
            p.push({
                id: product.id,
                product: product.product,
                quantity: product.quantity
            });
        });
        return p;
    }

}