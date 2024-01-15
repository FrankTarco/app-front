import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit{

  objUsuario:Usuario={}

  lstUsuarios:Usuario[]=[]

  statusEdit:boolean = false;

  constructor(private usuarioService:UsuarioService){}


  ngOnInit(): void {
    this.listar()
  }

  registraUsuario(){
    this.usuarioService.registrar(this.objUsuario).subscribe(
      x=>{
        if(x.status){
          alert(x.mensaje);
          this.listar();
          this.limpieza();
        }
        else{
          alert(x.mensaje)
        }
      }
    )
  }

  actualizarUsuario(){
    this.usuarioService.actualizar(this.objUsuario).subscribe(
      x=>{
        if(x.status){
          alert(x.mensaje);
          this.listar();
          this.limpieza();
          this.statusEdit=false
        }
        else{
          alert(x.mensaje)
        }
      }
    )
  }

  listar(){
    this.usuarioService.listar().subscribe(
      x=>{
        this.lstUsuarios = x
      }
    )
  }

  cargarData(obj:Usuario){
    this.objUsuario = obj;
    this.statusEdit = true;
    
  }

  eliminar(id:string){
    this.usuarioService.eliminar(id).subscribe(
      x=>{
        if(x.status){
          alert(x.mensaje);
          this.listar();
        }
        else{
          alert(x.mensaje)
        } 
      }
    )
  }

  limpieza(){
    this.objUsuario = {}
  }

}
