import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SideBarService, AdsService } from './services.index';


@NgModule({
    declarations: [],
    imports: [
        HttpModule
    ],
    exports: [],
    providers: [
        SideBarService,
        AdsService
    ],
})
export class ServiceModule { }