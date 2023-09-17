import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedRoutingModule } from './shared-routing.module';
import { SideOutComponent } from './side-out/side-out.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    SideOutComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    sharedRoutingModule
  ],
  exports:[
    SideOutComponent,
    PopupComponent
  ]
})
export class SharedModule { }
