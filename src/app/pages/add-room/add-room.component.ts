import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  flag: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  finishFunction() {

  }
  utility(elem: any) {
    if (!event.target.checked)
    {
      return !this.flag;
    }

  }
}
