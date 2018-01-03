import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileResolverService } from './profile-resolver.service';
import { SharedModule } from '../shared';
import { ProfileArticlesComponent } from './profile-articles/profile-articles.component';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    },
    children: [
      {
        path: '',
        component: ProfileArticlesComponent
      }
    ]
  }
]);

@NgModule({
  imports: [
    profileRouting,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileArticlesComponent
  ],
  providers: [
    ProfileResolverService
  ]
})
export class ProfileModule { }
