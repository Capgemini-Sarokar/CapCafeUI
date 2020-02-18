import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CafeUserService } from '../Services/cafe-user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService implements CanActivate {
  constructor(private userService: CafeUserService, private route: Router) { 
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.role() == "customer") {
      // the user must be a customer to be able to navigate the application
      return true;
    } else {
      // the user is not logged in and has to login first
      return false;
    }
  }
}
