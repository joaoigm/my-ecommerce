import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import Product from '../models/product';
import BaseService from './base.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class ProductService extends BaseService<Product> {
    
    

    constructor(http: HttpClient){
        super(http, environment.product_service_url);
    }

    public getByName(name: string): Observable<Product[]> {
        return this._http.get<Product[]>(this._url+`?name=${name}`, this.defaultHeaders)
    }
}