import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginAuthServiceService } from './authGuards/login-auth-service.service';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login", pathMatch:"full"
  },
  {
    path: "login",
    component: SignupLoginComponent,
    data:{isLogin:true}
  },
  {
    path: "signup",
    component: SignupLoginComponent,
    data:{isLogin:false}
  },
  {
    path: "navbar",
    loadChildren:()=>import('./navbar/navbar.module').then(m=>m.NavbarModule),
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "cartmod",
    loadChildren:()=>import('./cart-mod/cart-mod.module').then(m=>m.CartModModule),
  },
  {
    path:"**",
    redirectTo:"navbar",
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
