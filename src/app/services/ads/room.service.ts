import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IRoom } from '../../interfaces/room';

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

  createRoom(room: any) {
    return this.http.post(` ${this.urlBase}rooms`, room)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }
}
