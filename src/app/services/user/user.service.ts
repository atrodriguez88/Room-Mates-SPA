import { Injectable } from "@angular/core";
import { IUser } from "../../interfaces/user";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {
  // users: IUser[];
  urlBase = `${environment.ApiUrl}users/`;

  constructor(private http: Http) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get(this.urlBase, this.jwt())
      .map(res => <IUser[]>res.json())
      .catch(this.handleError);
  }

  addUser(users: string): Observable<IUser> {
    const body = JSON.stringify(users);
    const headers = new Headers({ "Content-Type": "application/json" });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.urlBase, body, options)
      .map(res => {
        console.log(res.json());
        const user = res.json();
        return user;
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
  private jwt() {
    const token = localStorage.getItem("token");
    if (token) {
      const headers = new Headers({ "Authorization": "Bearer " + token });
      headers.append( "Content-Type", "application/json" );
      return new RequestOptions({ headers: headers });
    }
  }
}
