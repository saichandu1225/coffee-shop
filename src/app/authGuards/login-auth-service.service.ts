import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthServiceService implements CanActivate {
  constructor(private route:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    // throw new Error('Method not implemented.');
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
