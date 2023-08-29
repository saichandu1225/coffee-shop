import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { PricePurchaseComponent } from './price-purchase/price-purchase.component';
import { CartListComponent } from './cart-list/cart-list.component';



const routes: Routes = [
        {
        path:"",
        component:CartItemsComponent
        },
        {
            path:"price",
            component:PricePurchaseComponent
        },
        {
            path:"cartlist",
            component:CartListComponent
        }
    ]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class CartRoutingModule{}