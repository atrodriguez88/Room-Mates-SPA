import { Component, OnInit } from "@angular/core";
import {
  RoomService,
  ProfileService,
  AlertifyService
} from "../../services/services.index";

@Component({
  selector: "app-ads",
  templateUrl: "./ads.component.html",
  styleUrls: ["./ads.component.css"]
})
export class AdsComponent implements OnInit {
  profiles: any[] = [];
  rooms: any[] = [];
  constructor(
    private _rooms: RoomService,
    private _profile: ProfileService,
    private alertify: AlertifyService
  ) {
    _profile.getProfiles().subscribe(
      res => {
        this.profiles = res;
      },
      err => {
        this.alertify.error(err);
      }
    );
    _rooms.getRooms().subscribe(
      res => {
        this.rooms = res;
      },
      err => {
        this.alertify.error(err);
      }
    );
  }

  ngOnInit() {}
}
