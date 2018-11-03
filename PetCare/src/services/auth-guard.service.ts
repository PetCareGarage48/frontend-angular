import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthorizationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkLogin(state.url, state);
  }

  checkLogin(url: string, routingState: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.authService.isAuthorized) { return true; }

    if (this.router.url === '/') {
      this.router.navigate(['login'], { queryParams: routingState.root.queryParams });
    } else {
      // this.authService.redirectUrl = url;
      // this.router.navigate(['login', { redirectUrl: url }]);
    }
    return false;

  }
}
