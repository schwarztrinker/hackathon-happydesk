import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
    children: [
      {path: '',component: WelcomeMessageComponent},
      {path: 'preferences', component: PreferencesComponent}
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
