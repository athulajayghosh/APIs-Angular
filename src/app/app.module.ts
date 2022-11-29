import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerAPIComponent } from './passenger-api/passenger-api.component';

const myRoute: Routes=[
  {path:"",
  component:PassengerAPIComponent
  }]


@NgModule({
  declarations: [
    AppComponent,
    PassengerAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
