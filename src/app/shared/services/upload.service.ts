import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
private url= environment.url;
  constructor(private http:HttpClient) { }

  
   actualizarFoto(
    archivo: File,
    tipo: 'paquete'|'medicos'|'hospitales',
    id: number
  ) {

      const url = `${this.url }/uploads/${ tipo }/${ id }`;
      const formData = new FormData();
      formData.append('imagen', archivo);

     return this.http.put(url,formData);
      
    

  }
}
