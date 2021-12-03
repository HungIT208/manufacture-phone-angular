import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ManufacturerComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
          {
            path: '',
            component: WelcomeComponent
          },
          {
            path: 'manufacturer',
            component: ManufacturerComponent
          },
          {
            path: 'phone',
            component: PhoneComponent
          }
       ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
