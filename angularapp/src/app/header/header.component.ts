import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
// import {  } from '@angular/common/src/facade/async';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// @Input()logut:string;
@Output()logout:EventEmitter<String> = new EventEmitter();
  constructor() { }

  session(){
this.logout.emit("Suceess fuly loged out");
  }

  ngOnInit() {
  }

}
