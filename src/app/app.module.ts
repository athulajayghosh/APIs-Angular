import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerAPIComponent } from './passenger-api/passenger-api.component';
import { UsDataAPIComponent } from './us-data-api/us-data-api.component';
import { UserInfoApiComponent } from './user-info-api/user-info-api.component';

const myRoute: Routes=[
  {path:"",
  component:PassengerAPIComponent
  },
  {path:"us",
  component:UsDataAPIComponent
  },
  {path:"userdata",
  component:UserInfoApiComponent
  }]


@NgModule({
  declarations: [
    AppComponent,
    PassengerAPIComponent,
    UsDataAPIComponent,
    UserInfoApiComponent
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
