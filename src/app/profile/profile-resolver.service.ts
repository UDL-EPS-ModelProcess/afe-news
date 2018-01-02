import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Profile, ProfilesService } from '../shared';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileResolverService implements Resolve <Profile> {

  constructor(
    private profileService: ProfilesService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.profileService.get(route.params['username'])
            .catch((err) => this.router.navigateByUrl('/'));
  }

}
