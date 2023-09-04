import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { NavbarRoutingModule } from "./navbar-routing.module";
import { CartModModule } from "../cart-mod/cart-mod.module";
import { FormsModule } from "@angular/forms";
import { DashBoardModule } from "../dash-board/dash-board.module";

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        NavbarRoutingModule,
        CartModModule,
        FormsModule
    ],
    exports:[
        NavbarComponent
    ]
})
export class NavbarModule{}
