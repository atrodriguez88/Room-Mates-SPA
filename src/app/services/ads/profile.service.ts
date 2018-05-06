import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IRoommate } from '../../interfaces/roommate';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class ProfileService {

    urlBase = 'http://localhost:5000/api/';

    constructor(private http: Http) { }

    getProfiles() {
        return this.http.get(` ${this.urlBase}profiles/user/1`)
            .map((res) => {
                console.log(res.json());
                return res.json();
            });
    }

    createProfile(profile: IRoommate) {
        return this.http.post(` ${this.urlBase}profiles`, profile)
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
