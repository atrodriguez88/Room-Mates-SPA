import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Router
import { AppRoutingModule } from './app.route';

// Modules
import { PagesModule } from './pages/pages.module';

// Services
import { ServiceModule } from './services/services.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    ServiceModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
