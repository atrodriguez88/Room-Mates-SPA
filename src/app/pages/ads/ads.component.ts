import { Component, OnInit } from '@angular/core';
import { AdsService } from '../../services/services.index';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  profiles: any[] = [];
  constructor(private _ads: AdsService) {
    _ads.getProfiles().subscribe(res => {
      this.profiles = res;
    }, err => {
      console.error('Ads services', err);
    });
  }

  ngOnInit() {
  }

}
