import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CafeUserService } from '../Services/cafe-user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.service.role() == "admin" || this.service.role() == "user") {
      return true;
    }

    this.route.navigate(['login']);
    return false;
  }

  constructor(private service: CafeUserService, private route: Router) {

  }
}
