import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class RulesService {

  constructor(private http: Http) { }

  getRules() {
    const urlBase = environment.ApiUrl;

    return this.http.get(`${urlBase}rules`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
