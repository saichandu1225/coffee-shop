import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DasboardChildComponent } from './dasboard-child/dasboard-child.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    DasboardChildComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule
  ],
  exports:[
    ItemCardComponent,
    ItemDetailsComponent,
    DasboardChildComponent
  ]
})
export class DashBoardModule { }
