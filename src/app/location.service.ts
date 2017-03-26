import { Injectable } from '@angular/core';

import { Clocation } from './clocation';
import { CLOCATIONS } from './clocation-data';

@Injectable()
export class LocationService {
  getClocations(): Promise<Clocation[]> {
    return Promise.resolve(CLOCATIONS);
  }

  getClocation(id: string): Promise<Clocation> {
  //console.log (id);
  return this.getClocations()
             .then(clocations => clocations.find(clocation => clocation.id === id));
  }
}