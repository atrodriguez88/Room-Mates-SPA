import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RoomService {

  urlBase = 'http://localhost:5000/api/';

  constructor(private http: Http) { }

  getRooms() {
    return this.http.get(` ${this.urlBase}rooms/user/0`)
      .map((res) => {
        console.log(res.json());
        return res.json();
      });
  }



}
