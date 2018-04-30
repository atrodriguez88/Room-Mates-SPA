import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { isUndefined, isDate } from 'util';
import { ProfileService, OcupService } from '../../services/services.index';
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

  ocupations: any[] = [];

  constructor(private _profile: ProfileService, private _ocup: OcupService) {
    this._ocup.getOcupations().subscribe(res => {
      console.log(res);
      this.ocupations = res;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  submit(f: NgForm) {
    console.log(f);
    console.log(this.profile);

    this._profile.createProfile(this.profile).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
