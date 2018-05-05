import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  urlBase = 'http://localhost:5000/api/account/';
  token: string;
  expiration: string;

  constructor(private http: Http, private router: Router) { }

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
          localStorage.setItem('expiration', user.expiration);
          this.token = user.token;
          this.expiration = user.expiration;
        }
      });
    // .catch(this.handleError);
  }


  logout() {
    this.token = null;
    localStorage.removeItem(`token`);
    this.router.navigate([`/login`]);
  }

  register(model: any) {
    const body = JSON.stringify(model);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.urlBase}create`, body, options)
      .map(res => {
        const user = res.json();
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('expiration', user.expiration);
          this.token = user.token;
          this.expiration = user.expiration;
        }
      });
  }
  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
