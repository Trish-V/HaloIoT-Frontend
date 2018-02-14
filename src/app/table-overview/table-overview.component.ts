import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {
  lat: number = 7.229963848258464;
  lng: number = 79.84802323068845;
  zoom: number = 10;
  constructor() {}

  ngOnInit() {


  }

}  
