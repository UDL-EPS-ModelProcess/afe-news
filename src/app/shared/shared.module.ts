import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { ArticlePreviewComponent } from './article-helpers/article-preview/article-preview.component';
import { ArticleListComponent } from './article-helpers/article-list/article-list.component';
import { ArticleMetaComponent } from './article-helpers/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ListErrorsComponent,
    ShowAuthedDirective,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    ShowAuthedDirective,
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    RouterModule
  ]
})
export class SharedModule {}
