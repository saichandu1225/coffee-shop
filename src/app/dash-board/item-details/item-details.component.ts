import { Component, OnInit } from '@angular/core';
import { CartitemsService } from 'src/app/shared-services/cartitems.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  cardsData:any=[
    {
      title:"coffee",
        img:"../assets/images/milktea.jpg",
        Name:"Espresso coffee",
        price:"120",
        qty:"0"
      }
  ];
  constructor(private cartitemservice:CartitemsService) { }

  ngOnInit() {
  }
  addItemsToCart(item:any){
    this.cartitemservice.selectedItems.push(item);
  }
}
