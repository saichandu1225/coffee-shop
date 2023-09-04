import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartRoutingModule} from './cart-routing.module';
import { PricePurchaseComponent } from './price-purchase/price-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations:[
      CartItemsComponent,
      PricePurchaseComponent,
      CartListComponent
  ],
  imports:[
    CartRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
     CartItemsComponent,
     PricePurchaseComponent,
     CartListComponent
  ]
})
export class CartModModule { }
