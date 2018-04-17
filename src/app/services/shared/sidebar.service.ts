import { Injectable } from '@angular/core';

@Injectable()
export class SideBarService {
   public menu: any = [
        {
          title: 'Profile',
          icon: 'mdi mdi-account-box',
          submenu: [
            { title: 'My profile', url: '/account' },
            { title: 'Inbox', url: '/inbox' }
          ]
        },
        {
          title: 'Ads',
          icon: 'mdi mdi-comment-text',
          submenu: [
            { title: 'My Ads', url: '/ads' },
            { title: 'New Roommate', url: '/ads/roommate' },
            { title: 'New Room', url: '/ads/room' }
          ]
        }
      ];
      constructor() {}
}