import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginAuthServiceService } from './authGuards/login-auth-service.service';
import { DashBoardModule } from './dash-board/dash-board.module';
import { CartModModule } from './cart-mod/cart-mod.module';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { SideMenuModule } from './side-menu/side-menu.module';
import { CartitemsService } from './shared-services/cartitems.service';
import { AdminComponent } from './admin/admin.component';
import { PipesModule } from './pipes/pipes.module';
import { UserModModule } from './user-mod/user-mod.module';

@NgModule({
  declarations: [		
    AppComponent,
    SignupLoginComponent,
      FooterComponent,
      AdminComponent,
      
   ],
  imports: [
        BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardModule,
    CartModModule,
    SharedModule,
    SideMenuModule,
    NavbarModule,
    UserModModule,
    NavbarModule,
    PipesModule
  ],
  providers: [LoginAuthServiceService,CartitemsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
  
  }
}

