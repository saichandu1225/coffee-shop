import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { NavbarModule } from '../navbar/navbar.module';
import { DashBoardComponent } from './dash-board/dash-board.component';



@NgModule({
  declarations: [
    ItemCardComponent,
    ItemDetailsComponent,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    PipesModule,
    NavbarModule
  ],
  exports:[
    ItemCardComponent,
    ItemDetailsComponent
  ],
  bootstrap: [DashBoardComponent],
})
export class DashBoardModule { }
