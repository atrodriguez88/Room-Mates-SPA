import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SideBarService, RoomService, ProfileService, RulesService,
         OcupService, RoomFeaturesService, PropertyTypeService,
          PropertyFeaturesService, AuthService, AlertifyService} from './services.index';


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
        RulesService,
        OcupService,
        RoomFeaturesService,
        PropertyTypeService,
        PropertyFeaturesService,
        AuthService,
        AlertifyService
    ],
})
export class ServiceModule { }