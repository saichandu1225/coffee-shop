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
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "dashboard",
    loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule),
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "shared",
    loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule),
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "sideMenu",
    loadChildren:()=>import('./side-menu/side-menu.module').then(m=>m.SideMenuModule),
    canActivate:[LoginAuthServiceService]
  },
  {
    path: "user",
    loadChildren:()=>import('./user-mod/user-mod.module').then(m=>m.UserModModule),
    canActivate:[LoginAuthServiceService]
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
