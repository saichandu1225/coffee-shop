import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { userRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserDetailsPageComponent,
    UserPopupComponent
  ],
  imports: [
    CommonModule,
    userRoutingModule
  ]
})
export class UserModModule { }
