import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import {
  SideBarService,
  RoomService,
  ProfileService,
  RulesService,
  OcupService,
  RoomFeaturesService,
  PropertyTypeService,
  PropertyFeaturesService,
  AuthService,
  UserService,
  AlertifyService
} from "./services.index";
import { HttpClientModule } from "@angular/common/http";
import { JwtModule, JwtHelperService } from "@auth0/angular-jwt";

@NgModule({
  declarations: [],
  imports: [
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return "";
        }
      }
    })
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
    AlertifyService,
    AuthService,
    UserService,
    JwtHelperService
  ]
})
export class ServiceModule {}
