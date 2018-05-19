import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PropertyFeaturesService {

  constructor(private http: Http) { }

  getPropertyFeatures() {
    const urlBase = environment.ApiUrl;
    return this.http.get(`${urlBase}propertyfeatures`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

}
