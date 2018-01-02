import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule, AuthGuardService } from '../shared';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    settingsRouting
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }
