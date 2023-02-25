import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetePageComponent } from './pages/paquete-page/paquete-page.component';
import { EditPaquetePageComponent } from './pages/edit-paquete-page/edit-paquete-page.component';
import { AddPaquetePageComponent } from './pages/add-paquete-page/add-paquete-page.component';

const routes: Routes = [
  {
    path:'',
    component:PaquetePageComponent
  },
  {
    path:'nuevo-paquete',
    component:AddPaquetePageComponent
  },
  {
    path:'actualizar/:id',
    component:EditPaquetePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaquetesRoutingModule { }
