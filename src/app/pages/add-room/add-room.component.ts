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

  flag: boolean = true;
  constructor(private _rules: RulesService) {
    _rules.getRules().subscribe(res => {
      console.log(res);
      this.rules = res;

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
