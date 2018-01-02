import { NgModule, ModuleWithProviders } from '@angular/core';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';
import { ArticleResolverService } from './article-resolver.service';
import { SharedModule } from '../shared';
import { MarkdownPipe } from './markdown.pipe';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolverService
    }
  }
]);

@NgModule({
  imports: [
    articleRouting,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    MarkdownPipe
  ],
  providers: [
    ArticleResolverService
  ]
})
export class ArticleModule { }
