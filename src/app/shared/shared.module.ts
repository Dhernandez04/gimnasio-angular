import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ModalImagenComponent } from './components/modal-imagen/modal-imagen.component';


@NgModule({
  declarations: [
    NavComponent,
    ModalImagenComponent
  ],
  exports:[
    NavComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ]
})
export class SharedModule { }
