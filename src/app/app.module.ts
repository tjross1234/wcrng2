import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';
import { LocationComponent } from './location.component';
import { SrMainComponent } from './sr/sr-main.component';
import { LocationService } from './location.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LocationComponent,
    SrMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
