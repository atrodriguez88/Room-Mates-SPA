import { Component, OnInit } from '@angular/core';
import { RulesService } from '../../services/services.index';

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
    rules: [
      {
        id: null,
        name: null
      }
    ],
    rentPerMonth: null,
    isUtilityIncluded: null,
    roomType: null,
    roomSquareMeters: null,
    isFurnished: null,
    roomFeatures: [
      {
        id: null,
        name: null
      }
    ],
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

  flag: boolean = true;
  constructor(private _rules: RulesService) {
    _rules.getRules().subscribe(res => {
      console.log(res);

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
}
