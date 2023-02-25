import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaquetesRoutingModule } from './paquetes-routing.module';
import { PaquetePageComponent } from './pages/paquete-page/paquete-page.component';
import { AddPaquetePageComponent } from './pages/add-paquete-page/add-paquete-page.component';
import { EditPaquetePageComponent } from './pages/edit-paquete-page/edit-paquete-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaquetePageComponent,
    AddPaquetePageComponent,
    EditPaquetePageComponent
  ],
  imports: [
    CommonModule,
    PaquetesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaquetesModule { }
