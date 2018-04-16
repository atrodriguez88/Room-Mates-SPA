import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Route
import { PagesRoutingModule } from './pages.route';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PagesRoutingModule,
        SharedModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent
    ],
    providers: [],
})
export class PagesModule { }