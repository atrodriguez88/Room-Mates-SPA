import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  RulesService,
  RoomFeaturesService,
  PropertyFeaturesService,
  OcupService,
  PropertyTypeService,
  RoomService,
  AlertifyService
} from "../../services/services.index";
import { IRoom } from "../../interfaces/room";
import { getLocaleDateFormat, FormatWidth } from "@angular/common";

@Component({
  selector: "app-add-room",
  templateUrl: "./add-room.component.html",
  styleUrls: ["./add-room.component.css"]
})
export class AddRoomComponent implements OnInit {
  room: IRoom = {
    address: "Falta actualizar este value",
    propertyType: null,
    numberBedrooms: null,
    numberBathrooms: null,
    roomsToRent: null,
    propertyFeatures: [],
    rules: [],
    rentPerMonth: null,
    isUtilityIncluded: false,
    utilityPerMonth: 0, // Check API
    roomType: null,
    roomSquareMeters: null,
    isFurnished: 0,
    ensuiteBathroom: null,
    roomFeatures: [],
    availableFrom: null, // check format
    minStayMonths: 0,
    prefMaxAge: null,
    smoking: null,
    pet: null,
    cleanliness: null,
    numberRoomatesAlready: 1,
    prefGender: 1,
    ocupationId: null,
    prefOcuppations: 1,
    prefMinAge: null,
    userId: 1
  };
  rules: any[] = [];
  roomF: any[] = [];
  propertTypes: any[] = [];
  propertyF: any[] = [];
  ocupations: any[] = [];

  constructor(
    private _rules: RulesService,
    private _roomF: RoomFeaturesService,
    private _propertyT: PropertyTypeService,
    private _propertyF: PropertyFeaturesService,
    private _ocupations: OcupService,
    private _room: RoomService,
    private alertify: AlertifyService
  ) {
    _rules.getRules().subscribe(res => {
      console.log(res);
      this.rules = res;
    });
    _roomF.getRoomFeatures().subscribe(res => {
      console.log(res);
      this.roomF = res;
    });
    _propertyT.getPropertyType().subscribe(res => {
      console.log(res);
      this.propertTypes = res;
    });
    _propertyF.getPropertyFeatures().subscribe(res => {
      console.log(res);
      this.propertyF = res;
    });
    _ocupations.getOcupations().subscribe(res => {
      console.log(res);
      this.ocupations = res;
    });
  }

  ngOnInit() {}

  finishFunction(f: NgForm) {
    console.log(f);
    this.room.userId = 1;
    console.log(this.room);

    this._room.createRoom(this.room).subscribe(
      res => {
        this.alertify.success("Room created");
      },
      err => {
        this.alertify.error(err);
      }
    );
  }
  utility(event) {
    console.log(event);

    if (!event.target.checked) {
      return (this.room.isUtilityIncluded = false);
    }
    return (this.room.isUtilityIncluded = true);
  }
  onRuleChange(id: number, event) {
    // console.log(id, event);
    this.onChange(id, event, this.room.rules);
    console.log(this.room.rules);
  }
  onRoomChange(id: number, event) {
    // console.log(id, event);
    this.onChange(id, event, this.room.roomFeatures);
    console.log(this.room.roomFeatures);
  }
  onFeatureChange(id: number, event) {
    this.onChange(id, event, this.room.propertyFeatures);
    console.log(this.room.propertyFeatures);
  }

  onChange(id: number, event, sourceArray) {
    if (!event.target.checked) {
      const index = sourceArray.indexOf(id);
      sourceArray.splice(index, 1);
    } else {
      sourceArray.push(id);
    }
  }

  IsvalidS1() {
    if (
      !this.room.propertyType ||
      !this.room.roomsToRent ||
      !this.room.numberBedrooms ||
      !this.room.numberBathrooms
    ) {
      return true;
    }
    return false;
  }
  IsvalidS2() {
    if (this.room.isUtilityIncluded && this.room.utilityPerMonth < 0) {
      return false;
    }
    if (
      !this.room.roomsToRent ||
      !this.room.roomType ||
      this.room.roomSquareMeters < 0
    ) {
      return true;
    }
    return false;
  }
  test(event) {
    console.log(event);
  }
}
