import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    SubMenuComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidemenuComponent
  ]
})
export class SideMenuModule { }
