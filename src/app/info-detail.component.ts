import { Component, Input, OnInit } from '@angular/core';
import { Infodet } from './infodet'

@Component({
  selector: 'info-detail',
  templateUrl: 'info-detail.component.html',
  styleUrls: ['info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  @Input()
  dets: Infodet[];


  constructor() {

  }

  ngOnInit() {
    
  }

}