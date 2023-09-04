import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyvaluePipe } from 'src/app/pipes/keyvalue.pipe';
import { CartitemsService } from 'src/app/shared-services/cartitems.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  isProductIncart:boolean=false
  cartInboxItem:any=[]
  itemPrice:any
    cardsData:any
  constructor(private cartitemservice:CartitemsService,private router:Router)
  {
    this.cardsData=this.cartitemservice.cardsData
    this.cartInboxItem=this.cartitemservice.selectedItems
  }
  ngOnInit() {
    // const keyvalue=new KeyvaluePipe();
    // console.log(keyvalue.transform(this.cardsData,"value"))
  }
  cartdetails(){
    this.router.navigate(['itemDetails']);
  }
  addItemsToCart(item:any){
    this.cartitemservice.addItemToCart(item)
  }

}
