import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        NavbarRoutingModule
    ],
    exports:[
        NavbarComponent
    ]
})
export class NavbarModule{}
