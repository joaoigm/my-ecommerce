import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import User from '../models/user';
import UserService from './user.service';
import Token from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: Token;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.token = JSON.parse(localStorage.getItem("access_key"));
   }

  isAuthenticated(): boolean {
    if(localStorage.getItem("access_key") && localStorage.getItem("currentUser")) return true;
    return false;
  }

  signup(name, email, password): void {
    this.http.post(environment.signup_url, {
      name: name,
      email: email,
      password: password
    }).subscribe( 
      res => alert("Usuário registrado com sucesso"),
      err => console.log(err),
      () => this.router.navigate(['/'])
    );
  }

  authenticate(email, password) {
    let params = new URLSearchParams();
    params.append('username',email);
    params.append('password',password);    
    params.append('grant_type','password');
    params.append('client_id',environment.client_id);
    params.append('scope', 'read_write');
    this.http.post<Token>(environment.auth_url, params.toString(), {
      headers: { 
        "Content-Type": 'application/x-www-form-urlencoded; charset=utf-8',
        "Authorization": 'Basic '+btoa(environment.client_id+":"+environment.client_secret)
      }
    })
    .subscribe(
      res => {this.token = res; this.saveToken(this.token)},
      err => console.log(err),
      () => this.userService.getByEmail(email).subscribe(
        res => localStorage.setItem('currentUser', JSON.stringify(res)),
        err => console.log(err),
        () => this.router.navigate(['/'])
      )
    );
  }

  getToken(): Token {
    return JSON.parse(localStorage.getItem('access_key'));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  saveToken(token){
    localStorage.setItem('access_key', JSON.stringify(token));
  }

  logout(): void {
    localStorage.removeItem('access_key');
    localStorage.removeItem('currentUser');
  }
}
