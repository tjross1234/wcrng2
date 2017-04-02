import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';
import { LocationComponent } from './location.component';
import { LocationService } from './location.service';
import { ContactComponent } from './contact.component';
import { RatesComponent } from './rates.component';
import { InfoComponent } from './info.component';
import { InfoDetailComponent } from './info-detail.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LocationComponent,
    ContactComponent,
    RatesComponent,
    InfoComponent,
    InfoDetailComponent
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
