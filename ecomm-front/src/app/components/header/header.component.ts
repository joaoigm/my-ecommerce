import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router){
    this.authenticated = authService.isAuthenticated();
  }

  authenticated: boolean

  public logout(): void {
    this.authService.logout();
    this.route.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
