import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BASE_URL } from './app.tokens';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue: 'http://www.angular.at/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
