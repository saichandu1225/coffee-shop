import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SideOutComponent } from "./side-out/side-out.component";


const routes: Routes = [
    {
    path:"",
    component:SideOutComponent
  }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]

})
export class sharedRoutingModule{}