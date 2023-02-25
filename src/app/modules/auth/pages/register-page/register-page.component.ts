import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup(
    {
  
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      telefono: new FormControl('', Validators.required),
      idRol: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
    },
    {
      validators: this.passIguales,
    }
  );

  formSubmit: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  enviarFormulario() {
    this.formSubmit = true;
    console.log(this.registerForm.invalid);
    this.construirUsuario();
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        if (response == true) {
          this.router.navigateByUrl('/iniciar-sesion');
        }
      },
      ({error}) => {
        console.log(error);
        Swal.fire('error', error.mensaje, 'error');
      }
    );
  }
  construirUsuario() {
    this.registerForm.controls['idRol'].setValue(2);
  }
  validarCampo(campo: string): boolean {
    if (this.registerForm.get(campo)!.invalid && this.formSubmit) {
      return true;
    } else {
      return false;
    }
  }
  contrasenaNovalida() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('repassword').value;
    if (pass1 !== pass2 && this.formSubmit) {
      return true;
    } else {
      return false;
    }
  }
  passIguales(g: FormGroup) {
    return g.get('password').value === g.get('repassword').value
      ? null
      : { mismatch: true };
  }
}
