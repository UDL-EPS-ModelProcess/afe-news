import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, ArticleService, Article, User } from '../shared';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  currentUser: User;
  canModify: boolean;
  isSubmitting: boolean;
  isDeleting: boolean;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticleService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retreive the prefetched article
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
      }
    );

    this.route.data.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
        .subscribe(
          success => this.router.navigateByUrl('/')
        );
  }

}
