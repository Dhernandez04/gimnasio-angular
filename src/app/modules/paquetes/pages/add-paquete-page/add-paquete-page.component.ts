import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaqueteService } from '@modules/paquetes/services/paquete.service';

@Component({
  selector: 'app-add-paquete-page',
  templateUrl: './add-paquete-page.component.html',
  styleUrls: ['./add-paquete-page.component.css']
})
export class AddPaquetePageComponent implements OnInit {


  public paqueteForm:FormGroup = new FormGroup({
    nombre:new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    fechaInicio:new FormControl('',Validators.required),
    fechaFin:new FormControl('',Validators.required),
    precio:new FormControl('',Validators.required),
    idUsuario:new FormControl('',Validators.required)
  });

  private formSubmited = false;


  constructor(private router:Router,private paqueteService:PaqueteService) { }

  ngOnInit(): void {
  }

  registrarPaquete(){
    this.formSubmited=true;
    let id = localStorage.getItem('userId');
    this.paqueteForm.controls['idUsuario'].setValue(parseInt(id));
    if(this.paqueteForm.invalid){
      return;
    }
    this.paqueteService.guardarPaquete(this.paqueteForm.value).subscribe(response=>{
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
