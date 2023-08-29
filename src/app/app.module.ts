import { NgModule } from '@angular/core';
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





@NgModule({
  declarations: [	
    AppComponent,
    SignupLoginComponent,
      FooterComponent
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
    NavbarModule
  ],
  providers: [LoginAuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  
  }
}

