import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';



@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ItemCardComponent,
    ItemDetailsComponent
  ]
})
export class DashBoardModule { }
