import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class OcupService {

  constructor(private http: Http) { }

  getOcupations() {
    const urlBase = environment.ApiUrl;
    return this.http.get(`${urlBase}ocupations`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
