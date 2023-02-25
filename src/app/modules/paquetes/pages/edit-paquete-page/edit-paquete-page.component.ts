import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaqueteService } from '@modules/paquetes/services/paquete.service';

@Component({
  selector: 'app-edit-paquete-page',
  templateUrl: './edit-paquete-page.component.html',
  styleUrls: ['./edit-paquete-page.component.css']
})
export class EditPaquetePageComponent implements OnInit {
  public paqueteForm:FormGroup = new FormGroup({
    id:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    fechaInicio:new FormControl('',Validators.required),
    fechaFin:new FormControl('',Validators.required),
    precio:new FormControl('',Validators.required),
    idUsuario:new FormControl('',Validators.required)
  });
  private formSubmited = false;
  constructor(private router:Router,private paqueteService:PaqueteService,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activateRouter.snapshot.params["id"];
    console.log(id);
    this.obtenerPaquetePorId(id);

  }
  obtenerPaquetePorId(id:number){
    this.paqueteService.obtenerPaquetePorId(id).subscribe(paquete=>{
      console.log(paquete);
      this.paqueteForm.controls['id'].setValue(paquete.id);
      this.paqueteForm.controls['nombre'].setValue(paquete.nombre);
      this.paqueteForm.controls['descripcion'].setValue(paquete.descripcion);
      this.paqueteForm.controls['precio'].setValue(paquete.precio);
      this.paqueteForm.controls['fechaInicio'].setValue(paquete.fechaInicio);
      this.paqueteForm.controls['fechaFin'].setValue(paquete.fechaFin);
      this.paqueteForm.controls['precio'].setValue(paquete.precio);
      this.paqueteForm.controls['idUsuario'].setValue(paquete.idUsuario);
    })
  }
  registrarPaquete(){
    this.formSubmited=true;
    let id = localStorage.getItem('userId');
  
    if(this.paqueteForm.invalid){
      return;
    }
    this.paqueteService.actualizarPaquete(this.paqueteForm.value).subscribe(response=>{
      this.router.navigateByUrl("/admin/servicios")
    })
  }

  validarCampo(campo:string):boolean{
    if(this.paqueteForm.get(campo)!.invalid && this.formSubmited){
      return true;
    }else{
      return false;
    }
  }

}
