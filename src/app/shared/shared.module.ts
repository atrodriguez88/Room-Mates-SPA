import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NavbarComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule { }