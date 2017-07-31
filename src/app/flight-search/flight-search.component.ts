import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
//              ^^^-------^^^---- Muss explizit importiert werden!!

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  // private http: Http;

  constructor(private http: Http) {
    // this.http = http;
  }

  ngOnInit() {
  }

  search(): void {
    let url = 'http://www.angular.at/api/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);

    this.http
        .get(url, {headers, search})
        .subscribe(
          (resp) => {
            this.flights = resp.json();
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
