import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService {

  urlBase = 'http://localhost:5000/api/account/';
  token: string;

  constructor(private http: Http) { }

  getUser() {
    return this.http.get(this.urlBase)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  Login(model: any) {
    const body = JSON.stringify(model);
    console.log(body);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.urlBase}login`, body, options)
      .map(res => {
        console.log(res);
        const user = res.json();
        if (user) {
          console.log(user);
          localStorage.setItem('token', user.token);
          this.token = user.token;
        }
      });
    // .catch(this.handleError);
  }
  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
