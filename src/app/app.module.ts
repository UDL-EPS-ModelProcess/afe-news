import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { SharedModule,
         ApiService,
         UserService,
         HeaderComponent,
         FooterComponent,
         JwtService,
         AuthGuardService,
         ProfilesService,
         ArticleService,
         CategoryService} from './shared';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { EditorModule } from './editor/editor.module';
import { ArticleModule } from './article/article.module';
import { ApiPageModule } from './api-page/api-page.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AuthModule,
    SettingsModule,
    ProfileModule,
    EditorModule,
    ArticleModule,
    ApiPageModule,
    rootRouting
  ],
  providers: [
    ApiService,
    UserService,
    JwtService,
    ProfilesService,
    ArticleService,
    CategoryService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
