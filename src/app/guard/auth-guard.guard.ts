import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../auth/service/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {
  constructor(private authService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authService.isLogin();
  }
  
}
