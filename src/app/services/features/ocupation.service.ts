import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OcupService {

  constructor(private http: Http) { }

  getOcupations() {
    const urlBase = 'http://localhost:5000/api/';
    return this.http.get(`${urlBase}ocupations`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
