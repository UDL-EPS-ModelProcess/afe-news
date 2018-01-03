import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../services';
import { ArticleListConfig, Article } from '../../models';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage  = 1;
  totalPages: Array<number> = [1];

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  constructor(
    private articlesService: ArticleService
  ) { }

  ngOnInit() {
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
        this.query.filters.limit = this.limit;
        this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }

    this.articlesService.query(this.query)
     .subscribe(data => {
        this.loading = false;
        this.results = data.articles;

        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });
}

setPageTo(pageNumber) {
  this.currentPage = pageNumber;
  this.runQuery();
}


}
