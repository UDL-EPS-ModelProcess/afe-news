import { Injectable } from '@angular/core';
import { UserService } from '../shared/index';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated.take(1).map(bool => bool);
  }
}
