import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';



const routes: Routes = [
        {
        path:"",
        component:ItemCardComponent
        },
        {
            path:"itemDetails",
            component:ItemDetailsComponent
        }
    ]
    
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class DashboardRoutingModule{}