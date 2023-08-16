import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { CartModModule } from "../cart-mod/cart-mod.module";

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        NavbarRoutingModule,
        CartModModule
    ],
    exports:[
        NavbarComponent
    ]
})
export class NavbarModule{}
