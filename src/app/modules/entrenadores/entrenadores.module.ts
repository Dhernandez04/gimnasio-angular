import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrenadoresRoutingModule } from './entrenadores-routing.module';
import { EntrenadoresPageComponent } from './pages/entrenadores-page/entrenadores-page.component';


@NgModule({
  declarations: [
    EntrenadoresPageComponent
  ],
  imports: [
    CommonModule,
    EntrenadoresRoutingModule
  ]
})
export class EntrenadoresModule { }
