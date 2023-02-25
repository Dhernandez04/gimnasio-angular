import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/admin/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  },
  {
    path:'admin',
    component:HomePageComponent,
    canActivate:[SessionGuard],
    loadChildren:()=>import(`./modules/admin/admin.module`).then(m=>m.AdminModule)
  },
  {
    path:'', pathMatch:'full', redirectTo:'/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }