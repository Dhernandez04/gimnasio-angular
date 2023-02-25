import { Component, OnInit } from '@angular/core';
import { PaqueteDto } from '@core/models/paquete.dto';
import { PaqueteService } from '@modules/paquetes/services/paquete.service';
import { ModalService } from '@shared/services/modal-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paquete-page',
  templateUrl: './paquete-page.component.html',
  styleUrls: ['./paquete-page.component.css']
})
export class PaquetePageComponent implements OnInit {

  listaPaquetes:PaqueteDto[]=[];
  constructor(private paqueteService:PaqueteService,
    private modalService:ModalService) { }

  ngOnInit(): void {
    this.obtenerPaquetes();
    this.modalService.nuevaImagen.subscribe(img=> this.obtenerPaquetes())
  }

  obtenerPaquetes(){
    let idUsusario = parseInt(localStorage.getItem("userId"));
    this.paqueteService.obtenerPaquetes(idUsusario).subscribe(paquetes=>{
      console.log(paquetes);
      
      this.listaPaquetes =paquetes;
    })
  }

  abrirModalImagen(paquete){
    this.modalService.abrirModal(paquete.id,paquete.imagen.pathUrl);
  }


  eliminarPaquete(id:number){
    Swal.fire({
      title: 'Esta seguro de realizar esta accion?',
      text: "Los cambios no podran ser revertidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.paqueteService.eliminarPaquete(id).subscribe(response=>{
          if(response){
            Swal.fire(
              'Eliminado!',
              'El registro ha sido elimiando.',
              'success'
            )
            this.obtenerPaquetes();
          }
        })
      
      }
    })
  }
}
