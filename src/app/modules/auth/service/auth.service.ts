import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '@core/models/authentication.req.dto';
import { AuthenticationResponse } from '@core/models/authentication.res.dto';
import { UsuarioInDto } from '@core/models/usuario.in.dto';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = environment.url;
  constructor(private http:HttpClient,private cookie:CookieService) { 

  }

  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(`${this.url}/auth/login`,authenticationRequest)
    .pipe(
      tap((response:any)=>{
       this.cookie.set('token',response.jwt,4,'/')
       localStorage.setItem('userId',response.userId)
      })
    );
  }

  register(usuarioInDto:UsuarioInDto):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/auth/register`,usuarioInDto);
  }
}
