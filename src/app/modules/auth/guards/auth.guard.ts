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
export class AuthGuard implements CanActivate {
  authState: boolean = false;
  constructor(private router: Router) {}

  canActivate(): boolean {
    this.authState = !!Number(localStorage.getItem('login-state'));
    if (this.authState) {
      alert(`You are already authenticated!`);
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
