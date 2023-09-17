import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DashBoardComponent } from './dash-board/dash-board.component';



const routes: Routes = [
        {
        path:"",
        component:DashBoardComponent,
        children: [
            {path: "", component: ItemCardComponent},
            {
                path:"itemDetails",
                component:ItemDetailsComponent
            }
        ]
        },
       
    ]
    
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class DashboardRoutingModule{}