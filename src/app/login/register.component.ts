import { Component, OnInit } from '@angular/core';
import { AuthService, AlertifyService } from '../services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  model = {};
  error = {};
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  constructor(private _auth: AuthService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  submit(form) {
    this._auth.register(this.model).subscribe(res => {
      this.router.navigate(['/dashboard']);
    }, err => {
      this.alertify.error(err);
    });
  }

  IsValid() {

  }

}
