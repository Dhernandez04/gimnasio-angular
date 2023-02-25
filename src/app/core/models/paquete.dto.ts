import { ImagenDto } from "./imagen.dto";

export interface PaqueteDto{
    nombre:string,
    descripcion:string,
    fechaInicio:Date,
    fechaFin:Date,
    precio:number,
    idUsuario:number,
    imagenId:number,
    imagen?:ImagenDto,
    id?:number,
}