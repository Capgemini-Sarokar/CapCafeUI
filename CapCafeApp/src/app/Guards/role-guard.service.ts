import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CafeUserService } from '../Services/cafe-user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.role() == "admin" || this.userService.role() == "user") {
      return true;
    }

    this.route.navigate(['login']);
    return false;
  }

  constructor(private userService: CafeUserService, private route: Router) {

  }
}
