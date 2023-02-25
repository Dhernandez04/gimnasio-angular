import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagenDto } from '@core/models/imagen.dto';
import { PaqueteDto } from '@core/models/paquete.dto';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  private readonly url =  environment.url;
  constructor(private http:HttpClient) { }
  imagenDto:ImagenDto ={ id:0,
    nombre:'',
    pathUrl:'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=',
    imagenId:''}
  obtenerPaquetes(id:number):Observable<PaqueteDto[]>{
    return this.http.get<PaqueteDto[]>(`${this.url}/paquetes/obtener-todos?usuarioId=${id}`)
    .pipe(
      map(data=>{
       
        data.map(element=>{
          if(element.imagen == null){
           element.imagen =this.imagenDto;
          }
        })
     
        
      return   data;
      })
    );
  }

  obtenerPaquetePorId(id:number):Observable<PaqueteDto>{
    return this.http.get<PaqueteDto>(`${this.url}/paquetes/obtener-por-id/${id}`);
  }

  guardarPaquete(paqueteDto:PaqueteDto):Observable<PaqueteDto>{
    return this.http.post<PaqueteDto>(`${this.url}/paquetes/guardar`,paqueteDto);
  }
  actualizarPaquete(paqueteDto:PaqueteDto):Observable<PaqueteDto>{
    return this.http.put<PaqueteDto>(`${this.url}/paquetes/actualizar`,paqueteDto);
  }
  eliminarPaquete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.url}/paquetes/eliminar/${id}`);
  }
}
