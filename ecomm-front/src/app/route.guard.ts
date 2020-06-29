import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router){}
  canActivate() {
      if(!this.authService.isAuthenticated()){
        this.route.navigate(['/login'])
        return false
      }
      return true;
  }
  
}
