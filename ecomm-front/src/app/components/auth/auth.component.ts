import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  loginEmail: string;
  loginPassword: string

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    this.authService.authenticate(this.loginEmail.toLowerCase(), this.loginPassword);
  }

  signupSubmit(): void {
    this.authService.signup(this.name, this.email.toLowerCase(), this.password);
  }

}
