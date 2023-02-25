import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  //formulario de registro
  loginForm:FormGroup = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  //variable para verificar si se envio el formulario
  formSubmit:boolean = false;
  constructor(private authService:AuthService,private router:Router,private cookie:CookieService) { 
    const token:boolean = this.cookie.check('token');
    if(token){
      this.router.navigate(['admin','servicios'])
      }
  }

  ngOnInit(): void {
  }

  enviarFormulario(){
    this.formSubmit= true;
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(response=>{

      this.router.navigateByUrl("/admin/servicios")
    },(err) => {
      Swal.fire('error', err.error.mensaje, 'error');
    })
  }

  validarCampo(campo:string):boolean{
    if(this.loginForm.get(campo)!.invalid && this.formSubmit){
      return true;
    }else{
      return false;
    }
  }

}
