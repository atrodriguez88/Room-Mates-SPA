import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/services.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {};
  data;
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this._auth.Login(this.model).subscribe(res => {
      console.log(res);
      this.data = res;
    }, err => {
      console.error(err);
    });
  }

}
