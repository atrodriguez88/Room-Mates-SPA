import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdsService {

  urlBase = 'http://localhost:5000/';

  constructor(private http: Http) { }

  getProfiles() {
    return this.http.get(` ${this.urlBase}api/profiles`)
      .map((res) => {
        console.log(res.json());
        return res.json();
      });
  }



}
