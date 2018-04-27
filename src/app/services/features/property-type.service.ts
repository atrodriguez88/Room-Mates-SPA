import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PropertyTypeService {

  constructor(private http: Http) { }

  getPropertyType() {
    const urlBase = 'http://localhost:5000/api/';
    return this.http.get(`${urlBase}propertype`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
