import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/services.index";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  decodedToken: any;
  constructor(private _auth: AuthService, router: Router) {}

  ngOnInit() {}

  logout() {
    this._auth.logout();
  }
}
