import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '@modules/usuarios/services/usuario.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public nombreUsuario:string ='';
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    let id =parseInt( localStorage.getItem('userId'));
    this.usuarioService.obtenerUsuarioPorId(id).subscribe(usuario=>{
      this.nombreUsuario= usuario.nombres+' '+usuario.apellidos;
    })
  }

}
