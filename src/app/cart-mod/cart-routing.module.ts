import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { PricePurchaseComponent } from './price-purchase/price-purchase.component';



const routes: Routes = [
        {
        path:"",
        component:CartItemsComponent
        },
        {
            path:"price",
            component:PricePurchaseComponent
        }
    ]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class CartRoutingModule{}