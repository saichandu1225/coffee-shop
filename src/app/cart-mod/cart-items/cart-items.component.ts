import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
@Input() menuitems:any=[]
  constructor() { }
 
  ngOnInit() {
    console.log(this.menuitems);
    
  }

}
