import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RoomFeaturesService {

  constructor(private http: Http) { }

  getRoomFeatures() {
    const urlBase = 'http://localhost:5000/api/';
    return this.http.get(`${urlBase}roomfeatures`)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }
}
