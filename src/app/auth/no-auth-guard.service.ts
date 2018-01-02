import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../shared/index';

@Injectable()
export class NoAuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
                // i.e. if isAuthenticated is false, then set canActivate to true
                return this.userService.isAuthenticated.take(1).map(bool => !bool);
  }

}
