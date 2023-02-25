import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path:'entrenadores',
   
  //  loadChildren:()=>import(`@modules/entrenadores/entrenadores.module`).then(m=>m.EntrenadoresModule)
  // },
  {
    path:'servicios',
   
   loadChildren:()=>import(`@modules/paquetes/paquetes.module`).then(m=>m.PaquetesModule)
  },
  {
    path:'', pathMatch:'full', redirectTo:'paquetes'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
