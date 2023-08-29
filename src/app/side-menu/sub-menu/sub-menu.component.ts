import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
@Input() submenudata:any=[]
  constructor() {
   }
  ngOnInit() {
    console.log(this.submenudata)
  }

}
