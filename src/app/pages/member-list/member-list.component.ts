import { Component, OnInit } from "@angular/core";
import { IUser } from "../../interfaces/user";
import { UserService, AlertifyService } from "../../services/services.index";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit {
  users: IUser[];

  constructor(private _user: UserService, private _alertify: AlertifyService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this._user.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        this._alertify.error(err);
      }
    );
  }
}
