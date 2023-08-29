import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }
  sidemenuData:any=[
    {
      name:"xyz",
      price:"120"
    },
    {
      name:"xyz",
      price:"120"
    },
    {
      name:"xyz",
      price:"120"
    },
    {
      name:"xyz",
      price:"120"
    },
    {
      name:"xyz",
      price:"120"
    },
  ]
  ngOnInit() {
  }

}
