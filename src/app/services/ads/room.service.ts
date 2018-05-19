import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IRoom } from '../../interfaces/room';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { environment } from '../../../environments/environment';

@Injectable()
export class RoomService {

  urlBase = environment.ApiUrl;

  constructor(private http: Http) { }

  getRooms() {
    return this.http.get(` ${this.urlBase}rooms/user/1`)
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

  private handleError(error) {
    console.error(error);
    const serveError = error.json().error;
    let modelStateErrors = '';
    if (serveError) {
      for (const key in serveError) {
        if (serveError.hasOwnProperty(key)) {
          modelStateErrors = serveError[key];
        }
      }
    }
    return Observable.throw(modelStateErrors || 'Server error');
  }
}
