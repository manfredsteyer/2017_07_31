import { Inject, Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { BASE_URL } from '../../app.tokens';

@Injectable()
export class FlightService {

  constructor(
    private http: Http,
    @Inject(BASE_URL) private baseUrl: string) {
    console.debug('');
  }

  find(from: string, to: string): Observable<Flight[]> {
    let url = this.baseUrl + '/flight';

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    return this.http
              .get(url, {headers, search})
              .map(r => r.json());
  }

}
