import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { UserPopupComponent } from './user-popup/user-popup.component';


const routes: Routes = [
        {
        path:"",
        component:UserDetailsPageComponent
        },
        {
            path:"popup",
            component:UserPopupComponent
        }
    ]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class userRoutingModule{}