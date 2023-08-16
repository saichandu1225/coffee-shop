import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubMenuComponent } from "./sub-menu/sub-menu.component";

const routes: Routes = [
    {
        path:"",
        component:SubMenuComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class sidemenuRoutingModule{}