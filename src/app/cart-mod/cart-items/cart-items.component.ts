import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartitemsService } from 'src/app/shared-services/cartitems.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  cartitems:any=[]
  constructor(private cart:CartitemsService,private router:Router) {
    this.cartitems=this.cart.selectedItems
   } 
  ngOnInit() {
  }
  cartList(){
      this.router.navigate([''])
  }

}
