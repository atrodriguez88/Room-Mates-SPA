import { Component, OnInit } from '@angular/core';
import { RulesService, RoomFeaturesService, PropertyFeaturesService,
         OcupService, PropertyTypeService,  } from '../../services/services.index';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room = {
    address: null,
    propertyType: null,
    numberBedrooms: null,
    numberBathrooms: null,
    roomsToRent: null,
    propertyFeatures: [],
    rules: [],
    rentPerMonth: null,
    isUtilityIncluded: null,
    roomType: null,
    roomSquareMeters: null,
    isFurnished: null,
    roomFeatures: [],
    availableFrom: null,
    minStayMonths: null,
    prefMaxAge: null,
    smoking: null,
    pet: null,
    cleanliness: null,
    numberRoomatesAlready: null,
    prefGender: null,
    ocupationId: null,
    prefOcuppations: null,
    prefMinAge: null,
    userId: 0
  };
  rules: any[] = [];
  roomF: any[] = [];
  propertType: any[] = [];
  propertyF: any[] = [];
  ocupations: any[] = [];

  flag = true;
  constructor(private _rules: RulesService, private _roomF: RoomFeaturesService, private _propertyT: PropertyTypeService,
              private _propertyF: PropertyFeaturesService, private _ocupations: OcupService )
  {

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
      this.propertType = res;
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

  ngOnInit() {
  }

  finishFunction() {

  }
  utility(elem: any) {
    // if (!event.target.checked) {
    //   return !this.flag;
    // }

  }
  onRuleChenge(id: number, event) {
    console.log(id, event);
    if (!event.target.checked) {
      const index = this.room.rules.indexOf(id);
      this.room.rules.splice(index, 1);
    }
    else {
      this.room.rules.push(id);
    }
    console.log(this.room.rules);

  }

}
