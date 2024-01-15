import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const urlBase = "http://localhost:8090/api/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  listar():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(urlBase)
  }

  registrar(obj:Usuario):Observable<any>{
    return this.http.post(urlBase,obj)
  }

  actualizar(obj:Usuario):Observable<any>{
    return this.http.put(urlBase,obj)
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete(urlBase+'/'+id)
  }
}
