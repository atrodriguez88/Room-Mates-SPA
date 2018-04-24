import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RulesService {

  constructor(private http: Http) { }

  getRules() {
    const urlBase = 'http://localhost:5050/api/';

    return this.http.get(`${urlBase}rules`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
