import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedRoutingModule } from './shared-routing.module';
import { SideOutComponent } from './side-out/side-out.component';



@NgModule({
  declarations: [
    SideOutComponent
  ],
  imports: [
    CommonModule,
    sharedRoutingModule
  ],
  exports:[
    SideOutComponent
  ]
})
export class SharedModule { }
