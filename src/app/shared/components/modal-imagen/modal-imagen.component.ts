import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/services/modal-service.service';
import { UploadService } from '@shared/services/upload.service';
import Swal from 'sweetalert2';
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent implements OnInit {
  public imgTemp: any = null;
  public imagenSubir: File;


  constructor(public modalService:ModalService,private uploadService:UploadService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imgTemp=null;
    this.modalService.cerrarModal();
  }
  cambiarImagen( e) {
    this.imagenSubir = e.target.files[0];

    if ( !e.target.files[0] ) { 
      return this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL( e.target.files[0] );

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }

  }

  subirImagen() {

    this.uploadService
      .actualizarFoto( this.imagenSubir, 'paquete', this.modalService.id )
      .subscribe( (img:any) => {
       this.modalService.nuevaImagen.emit(img.imagen.pathUrl)
        Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');
        this.cerrarModal();
      }, err => {
        console.log(err);
        Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      })

  }
}
