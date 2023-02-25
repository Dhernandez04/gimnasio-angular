import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path:'iniciar-sesion',
    component:LoginPageComponent
  },
  {
    path:'registro',
    component:RegisterPageComponent
  },
  {
    path:'', pathMatch:'full', redirectTo:'/iniciar-sesion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
