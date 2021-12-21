import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth0/auth0-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponentComponent } from './shared/components/auth-button-component/auth-button-component.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponentComponent,
    LogoutPageComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-ba4lmxxa.auth0.com',
      clientId: 'ElsSVx164lsPfGBMUg2OmhCYqQexZNit'
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
