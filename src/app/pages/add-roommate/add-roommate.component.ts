import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { isUndefined, isDate } from 'util';
import { ProfileService } from '../../services/services.index';
import { IRoommate } from '../../interfaces/roommate';

@Component({
  selector: 'app-add-roommate',
  templateUrl: './add-roommate.component.html',
  styleUrls: ['./add-roommate.component.css']
})
export class AddRoommateComponent implements OnInit {

  profile: IRoommate = {
    // id: null,
    age: null,
    gender: '',
    ocupationId: null,
    address: '',
    maxRentMonth: '',
    movingDate: '',
    comentarios: '',
    userId: 1
  };

  flagOcup = false;
  flagGend = false;
  flagDate = false;

  constructor(private _profile: ProfileService) { }

  ngOnInit() {
  }

  onOcupChange() {
    return this.flagOcup = true;
  }
  onGendChange() {
    return this.flagGend = true;
  }
  onDateChange(elem) {
    if (elem.value === '') {
      return this.flagDate = false;
    }
    return this.flagDate = true;
  }
  submit(form: NgForm) {
    console.log(form);
    console.log(this.profile);

    this._profile.createProfile(this.profile).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
