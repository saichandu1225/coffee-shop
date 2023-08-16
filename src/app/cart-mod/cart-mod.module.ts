import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartRoutingModule} from './cart-routing.module';
import { PricePurchaseComponent } from './price-purchase/price-purchase.component';


@NgModule({
  declarations:[
      CartItemsComponent,
      PricePurchaseComponent
  ],
  imports:[
    CartRoutingModule,
    CommonModule
  ],
  exports:[
     CartItemsComponent,
     PricePurchaseComponent
  ]
})
export class CartModModule { }
