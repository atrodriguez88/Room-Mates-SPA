import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Route
import { PagesRoutingModule } from './pages.route';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AdsComponent } from './ads/ads.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddRoommateComponent } from './add-roommate/add-roommate.component';
import { InboxComponent } from './inbox/inbox.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SearchRoomComponent } from './search-room/search-room.component';
import { SearchRoommateComponent } from './search-roommate/search-roommate.component';

import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProfileComponent,
        AdsComponent,
        AddRoomComponent,
        AddRoommateComponent,
        InboxComponent,
        UpgradeComponent,
        SearchRoomComponent,
        SearchRoommateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PagesRoutingModule,
        SharedModule,
        ArchwizardModule,
        FormsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent
    ],
    providers: [],
})
export class PagesModule { }