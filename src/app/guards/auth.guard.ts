import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService, AlertifyService } from "../services/services.index";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private _alertify: AlertifyService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    this._alertify.warning("You need to be logged in this area");
    this.router.navigate(["/login"]);
  }
}
