import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideOutComponent } from './side-out/side-out.component';
import { sharedRoutingModule } from './shared-routing.module';



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
