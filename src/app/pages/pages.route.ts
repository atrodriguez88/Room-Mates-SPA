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
import { SearchRoommateComponent } from './search-roommate/search-roommate.component';
import { SearchRoomComponent } from './search-room/search-room.component';
import { AuthGuard } from '../guards/auth.guard';

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
            { path: 'ads/save/room', component: AddRoomComponent, data: { title: 'Room' } },
            { path: 'ads/save/roommate', component: AddRoommateComponent, data: { title: 'Roommate' } },
            { path: 'roommate/:id/search', component: SearchRoommateComponent, data: { title: 'Search RoomMate' } },
            { path: 'room/:id/search', component: SearchRoomComponent, data: { title: 'Search Room' } },
            { path: 'upgrade', component: UpgradeComponent, data: { title: 'Upgrade' } },
        ],
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
];

export const PagesRoutingModule = RouterModule.forChild(routes);
