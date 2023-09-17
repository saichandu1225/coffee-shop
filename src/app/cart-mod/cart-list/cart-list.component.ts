import { Component, OnInit } from '@angular/core';
import { CartitemsService } from 'src/app/shared-services/cartitems.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartitems:any=[]
  noItems:boolean=true;
  itemPrice:any
  constructor(public cart:CartitemsService) {
    this.itemPrice=this.cart.getPriceDetailsInCArtItems(this.cartitems)
  
   }
  //  getPriceDetails(item:any){
  //   this.itemPrice=this.cart.getPriceDetailsInCArtItems(item)
    
  // }
  ngOnInit() {
    this.cartitems=this.cart.selectedItems
    // this.getPriceDetails(this.cartitems)
  
  }
  
  decItemCount(item:any){
    this.cart.decItemCount(item);
    }
  incItemCount(item:any){
    this.cart.incItemCount(item)
  }
  removeItem(item:any){
this.cart.removeOtemFromCart(item)
  }
}
