import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby.component';
import { LocationComponent } from './location.component';
import { ContactComponent } from './contact.component';
import { RatesComponent } from './rates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lobby',
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: ':locationid',
    component: LocationComponent
  },
  {
    path: ':locationid/contact',
    component: ContactComponent
  },
  {
    path: ':locationid/rates',
    component: RatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }