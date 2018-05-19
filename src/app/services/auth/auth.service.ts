import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {
  urlBase = `${environment.ApiUrl}account/`;
  token: string;
  expiration: string;
  decodedToken: any;

  constructor(
    private http: Http,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  getUser() {
    return this.http
      .get(this.urlBase)
      .map(res => res.json())
      .catch(this.handleError);
  }

  Login(model: any) {
    const body = JSON.stringify(model);
    console.log(body);

    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.urlBase}login`, body, options)
      .map(res => {
        console.log(res);
        const user = res.json();
        if (user) {
          console.log(user);
          localStorage.setItem("token", user.token);
          localStorage.setItem("expiration", user.expiration);
          this.token = user.token;
          this.expiration = user.expiration;
          this.decodedToken = this.jwtHelper.decodeToken(this.token);
          console.log(this.decodedToken);
        }
      })
      .catch(this.handleError);
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  logout() {
    this.token = null;
    localStorage.removeItem(`token`);
    this.router.navigate([`/login`]);
  }

  register(model: any) {
    const body = JSON.stringify(model);
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.urlBase}create`, body, options)
      .map(res => {
        const user = res.json();
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("expiration", user.expiration);
          this.token = user.token;
          this.expiration = user.expiration;
        }
      })
      .catch(this.handleError);
  }
  private handleError(error) {
    console.error(error);
    const serveError = error.json().error;
    let modelStateErrors = "";
    if (serveError) {
      for (const key in serveError) {
        if (serveError.hasOwnProperty(key)) {
          modelStateErrors = serveError[key];
        }
      }
    }
    return Observable.throw(modelStateErrors || "Server error");
  }
}
