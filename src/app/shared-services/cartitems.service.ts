import { Injectable, OnInit } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { KeyvaluePipe } from '../pipes/keyvalue.pipe';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService implements OnInit{
  selectedItems:any=[]
  addedCartItem:boolean=false
  cartSubject=new Subject();
  cartSubject1=new Subject();
  cardsData:any={
    coffee:[
      {
        img:"../assets/images/milktea.jpg",
        Name:"milktea",
        price:20,
        qty:1
      },
      {
        img:"../assets/images/MasalaTea.jpg",
        Name:"MasalaTea",
        price:120,
        qty:1
      },
      {
        img:"../assets/images/espresso.jpg",
        Name:"espresso",
        price:110,
        qty:1
      },
      {
        
        img:"../assets/images/cappuccino.jpg",
        Name:"cappuccino",
        price:200,
        qty:1
      },
    ],
    cakes:[
      {
          img:"",
          Name:"chocolate cake",
          price:100,
          qty:0

      }
    ]
    }
constructor(private keyvalue:KeyvaluePipe) { 
  console.log(this.keyvalue.transform(this.cardsData))

}
  ngOnInit() {
  }
  addItemToCart(item:any)
  {
    this.selectedItems.push(item);
    this.cartSubject.next(this.selectedItems)
  }
  displaysidecart(){
    this.addedCartItem=!this.addedCartItem
    this.cartSubject1.next(this.addedCartItem)
  }
  getPriceDetailsInCArtItems(cartItem:any)
  {
    let priceDetails= cartItem.price*cartItem.qty
    console.log(priceDetails)
    return priceDetails
  }
  incItemCount(index:any)
  {
    this.selectedItems[index].qty++;
    this.cartSubject.next(this.selectedItems)
  }
  decItemCount(index:any){
    this.selectedItems[index].qty--;
    this.cartSubject.next(this.selectedItems)
  }
  removeOtemFromCart(item:any){
    let removeConfrim=window.confirm("are you sure")
    if (removeConfrim) {
      let index=this.selectedItems.findIndex((list:any)=>{
        return item.isbn===list.isbn
      }); 
      this.selectedItems.splice(index,1)
      this.cartSubject.next(this.selectedItems)
    }

  }

}
