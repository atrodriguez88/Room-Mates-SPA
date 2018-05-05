import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {};
  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model);
    this._auth.Login(this.model).subscribe(res => {
      this.route.navigate(['/dashboard']);
    }, err => {
      console.error(err);
    });
  }

}
