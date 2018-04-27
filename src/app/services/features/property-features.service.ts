import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PropertyFeaturesService {

  constructor(private http: Http) { }

  getPropertyFeatures() {
    const urlBase = 'http://localhost:5000/api/';
    return this.http.get(`${urlBase}propertyfeatures`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
