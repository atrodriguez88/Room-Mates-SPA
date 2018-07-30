import { Component, OnInit } from "@angular/core";
import {
  RoomService,
  ProfileService,
  AlertifyService
} from "../../services/services.index";
import { IRoommate } from "../../interfaces/roommate";

@Component({
  selector: "app-ads",
  templateUrl: "./ads.component.html",
  styleUrls: ["./ads.component.css"]
})
export class AdsComponent implements OnInit {
  profile: IRoommate;
  rooms: any[] = [];
  constructor(
    private _rooms: RoomService,
    private _profile: ProfileService,
    private alertify: AlertifyService
  ) {
    _profile.getProfiles().subscribe(
      res => {
        this.profile = res;
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
