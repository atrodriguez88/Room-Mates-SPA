import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SideBarService, RoomService, ProfileService } from './services.index';


@NgModule({
    declarations: [],
    imports: [
        HttpModule
    ],
    exports: [],
    providers: [
        SideBarService,
        ProfileService,
        RoomService
    ],
})
export class ServiceModule { }