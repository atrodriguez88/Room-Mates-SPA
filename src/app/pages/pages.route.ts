import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { AdsComponent } from './ads/ads.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddRoommateComponent } from './add-roommate/add-roommate.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'account', component: ProfileComponent, data: { title: 'Profile' } },
            { path: 'inbox', component: InboxComponent, data: { title: 'Inbox' } },
            { path: 'ads', component: AdsComponent, data: { title: 'My Ads' } },
            { path: 'ads/room', component: AddRoomComponent, data: { title: 'New Room' } },
            { path: 'ads/roommate', component: AddRoommateComponent, data: { title: 'New Roommate' } },
            { path: 'upgrade', component: UpgradeComponent, data: { title: 'Upgrade' } },
        ]
    },
];

export const PagesRoutingModule = RouterModule.forChild(routes);
