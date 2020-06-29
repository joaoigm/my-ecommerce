import { Injectable } from '@angular/core';
import User from '../models/user';
import BaseService from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class UserService extends BaseService<User> {


    constructor(http: HttpClient){
        super(http, environment.user_service_url);
    }

    public getByEmail(email): Observable<User> {
        return this._http.get<User>(this._url, {
            params: {
                "email": email
            }
        });
    }
}