import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class RoomFeaturesService {

  constructor(private http: Http) { }

  getRoomFeatures() {
    const urlBase = environment.ApiUrl;
    return this.http.get(`${urlBase}roomfeatures`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }
}
