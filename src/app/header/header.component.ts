import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sidenavMode:any;

  sidenavOpen:any='closed';

  opennavOpen:any= false;
icons:any='menu';

ddd:any='opened';

  changeMode(){
    this.opennavOpen = !this.opennavOpen;
    if(this.opennavOpen){
      return this.icons='close';
    }else{
      return this.icons='menu';
    }
  }

  constructor() { }

  ngOnInit(){
  }

}
