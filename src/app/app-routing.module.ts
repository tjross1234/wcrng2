import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby.component';
import { LocationComponent } from './location.component';
import { SrMainComponent } from './sr/sr-main.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }