import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDto } from '@core/models/usuario.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly url =environment.url
  constructor(private http:HttpClient) { }

  obtenerUsuarioPorId(id:number):Observable<UsuarioDto>{
    return this.http.get<UsuarioDto>(`${this.url}/usuarios/obtener-por-id/${id}`);
  }
}
