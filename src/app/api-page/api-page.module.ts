import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiPageComponent } from './api-page.component';
import { SharedModule, AuthGuardService } from '../shared';
import { RouterModule } from '@angular/router';

const apiRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'api',
    component: ApiPageComponent
  }
]);

@NgModule({
  imports: [
    apiRouting,
    SharedModule
  ],
  declarations: [
    ApiPageComponent
  ]
})
export class ApiPageModule { }
