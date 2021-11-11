import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { LoginComponent } from './login/login.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WelcomeMessageComponent,
    FooterComponent,
    NavbarComponent,
    PreferencesComponent,
    SlideshowComponent,
    BenefitsComponent,
    LoginComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
