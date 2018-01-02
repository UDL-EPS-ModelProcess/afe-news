import { NgModule, ModuleWithProviders } from '@angular/core';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService, SharedModule } from '../shared';
import { EditableArticleResolverService } from './editable-article-resolver.service';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editor/:slug',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      article: EditableArticleResolverService
    }
  }
]);

@NgModule({
  imports: [
    editorRouting,
    SharedModule
  ],
  declarations: [
    EditorComponent
  ],
  providers: [
    EditableArticleResolverService
  ]
})
export class EditorModule { }
