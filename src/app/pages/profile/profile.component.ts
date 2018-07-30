import { Component, OnInit } from "@angular/core";
import { IUser } from "../../interfaces/user";
import {
  UserService,
  AuthService,
  AlertifyService
} from "../../services/services.index";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: IUser;
  decoden: any;
  constructor(
    private _user: UserService,
    private _auth: AuthService,
    private _alertify: AlertifyService
  ) {
    this.decoden = _auth.decodedToken;
    console.log(this.decoden);
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this._user.getUser(this.decoden.unique_name).subscribe(
      res => {
        this.user = res;
        console.log(res);
      },
      err => {
        this._alertify.error(err);
      }
    );
  }
}
