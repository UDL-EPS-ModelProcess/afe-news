import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Category } from '../models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll (): Observable<Category[]> {
    return this.apiService.get('/category')
        .map(data => data);
  }

  get (name): Observable<Category> {
    return this.apiService.get('/category/' + name)
        .map(data => data.news);
  }

}
