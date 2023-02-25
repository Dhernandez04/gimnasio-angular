import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadoresPageComponent } from './pages/entrenadores-page/entrenadores-page.component';

const routes: Routes = [
  {
    path:'',
    component:EntrenadoresPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrenadoresRoutingModule { }
