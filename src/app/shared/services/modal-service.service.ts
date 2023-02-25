import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _ocultarModal:boolean = true;
  public id:number
  public img?:string
  public nuevaImagen:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  get ocultarModal(){
    return this._ocultarModal;
  }
  abrirModal(id:number,img?:string){
    this.id=id;
   
    this.img=img;

    return this._ocultarModal=false;
  }
  cerrarModal(){
    return this._ocultarModal=true;
  }
}
