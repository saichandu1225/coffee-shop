import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginAuthServiceService } from './authGuards/login-auth-service.service';

const routes: Routes = [
  {
    path: "",
    redirectTo:"login", pathMatch:"full"
  },
  {
    path: "login",
    component: SignupLoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[LoginAuthServiceService]
  },
  {
    path: 'products',
    component: HomeComponent,
    canActivate:[LoginAuthServiceService]
  }, 
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "sale",
    component: SaleComponent,
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "navbar",
    component: NavbarComponent,
    canActivate:[LoginAuthServiceService]
  },
  {
    path:"**",
    redirectTo:"login",
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
