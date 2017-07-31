import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';
//              ^^^-------^^^---- Muss explizit importiert werden!!

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) {
    console.debug('');
  }

  ngOnInit() {
  }

  search(): void {
    this.flightService
        .find(this.from, this.to)
        .subscribe(
          (flights) => {
            this.flights = flights;
          },
          (errResp) => {
            console.error('Error loading flights', errResp);
          }
        )

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
