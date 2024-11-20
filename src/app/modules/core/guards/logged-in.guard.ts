import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class loggedInGuard implements CanActivate {
  loggedInState: boolean = false;
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.loggedInState = !!Number(localStorage.getItem('login-state'));
    if (!this.loggedInState) {
      alert(`You are not authenticated!`);
      this.router.navigate(['auth/invitation']);
      return false;
    }
    return true;
  }
}
