import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SideBarService, RoomService, ProfileService, RulesService } from './services.index';


@NgModule({
    declarations: [],
    imports: [
        HttpModule
    ],
    exports: [],
    providers: [
        SideBarService,
        ProfileService,
        RoomService,
        RulesService
    ],
})
export class ServiceModule { }