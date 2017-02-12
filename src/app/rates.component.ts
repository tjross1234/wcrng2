import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { LocationService } from './location.service';
import { Clocation } from './clocation';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rates',
  templateUrl: 'rates.component.html',
  styleUrls: ['rates.component.css']
})
export class RatesComponent implements OnInit {
  @Input()
  clocation: Clocation;


  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.locationService.getClocation(params['locationid']))
      .subscribe(clocation => this.clocation = clocation);
    console.log(this.clocation);
    }

}