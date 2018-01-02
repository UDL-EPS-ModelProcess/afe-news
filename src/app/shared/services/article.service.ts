import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '../models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(
    private apiService: ApiService
  ) { }

  get (slug): Observable<Article> {
    return this.apiService.get('/news/' + slug)
        .map(data => data.news);
  }

  save (article): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService.put('/news/' + article.slug, {news: article})
                 .map(data => data.news);
    } else {
      return this.apiService.post('/news/', {news: article})
             .map(data => data.news);
    }
  }

  destroy (slug) {
    return this.apiService.delete('/news/' + slug);
  }

}
