import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CurrencyFormatPipe } from '../currency-format.pipe/currency-format.pipe';



@NgModule({
  declarations: [
    SubMenuComponent,
    SidemenuComponent,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidemenuComponent,
    SubMenuComponent

  ],
})
export class SideMenuModule { }
