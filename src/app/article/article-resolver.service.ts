import { Injectable } from '@angular/core';
import { ArticleService, UserService, Article } from '../shared';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleResolverService implements Resolve<Article> {

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):  Observable<any>  {
            return this.articleService.get(route.params['slug'])
                       .catch((err) => this.router.navigateByUrl('/'));
  }

}
