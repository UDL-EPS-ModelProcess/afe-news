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
         FooterComponent} from './shared';
import { AuthModule } from './auth/auth.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AuthModule,
    rootRouting
  ],
  providers: [
    ApiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
