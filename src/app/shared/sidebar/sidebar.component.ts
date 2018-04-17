import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../../services/shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu: any;
  constructor(private _sideService: SideBarService) { }

  ngOnInit() {
    this.menu = this._sideService.menu;
  }

}
