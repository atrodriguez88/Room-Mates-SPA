import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PropertyTypeService {

  constructor(private http: Http) { }

  getPropertyType() {
    const urlBase = environment.ApiUrl;
    return this.http.get(`${urlBase}propertype`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
