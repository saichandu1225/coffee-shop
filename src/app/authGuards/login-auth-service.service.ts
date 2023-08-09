import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthServiceService implements CanActivate {
  constructor(private route:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    const user=localStorage.getItem('user')
    if(user)
    {
      return true;
    }
    else
    {
      this.route.navigate(['login']);
      return false
    }
  }
}
