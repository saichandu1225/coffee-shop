import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cartitems:any =[
    {
      title:"coffee",
        img:"../assets/images/milktea.jpg",
        Name:"Tea",
        price:"120"
      },
      {
        title:"coffee",
        img:"../assets/images/espresso.jpg",
        Name:"Tea",
        price:"120"
      },
      {
        title:"coffee",
        img:"../assets/images/espresso.jpg",
        Name:"Tea",
        price:"120"
      },
      {
        title:"coffee",
        img:"../assets/images/espresso.jpg",
        Name:"Tea",
        price:"120"
      },
    ]
  ngOnInit(): void {
  }
 
}
