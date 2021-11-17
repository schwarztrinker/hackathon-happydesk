import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { LoginComponent } from './login/login.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { DeskDetailComponent } from './desk-detail/desk-detail.component';

import { ReservationsComponent } from './reservations/reservations.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
    children: [
      {path: '',component: WelcomeMessageComponent},
      {path: 'preferences', component: PreferencesComponent},
      {path: 'login', component: LoginComponent},
      {path: 'dialogue', component: DialogueComponent },
      {path: 'desk/:id', component: DeskDetailComponent },
      {path: 'checkout', component: CheckoutComponent},
      {path: 'reservations', component: ReservationsComponent},


  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
