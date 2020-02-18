import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CafeUserService } from '../Services/cafe-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.role() == "admin" || this.userService.role() == "customer") {
      // the user must be logged in to be able to navigate the application
      return true;
    } else {
      // the user is not logged in and has to login first
      this.route.navigate(['login']);
      return false;
    }
  }

  constructor(private userService: CafeUserService, private route: Router) {

  }
}
