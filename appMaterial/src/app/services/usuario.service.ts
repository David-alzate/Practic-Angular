import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "Monno", nombre: 'David', apellido: "Alzate", sexo: 'Masculino'},
    {usuario: "Monno1", nombre: 'Santiago', apellido: "Jimenez", sexo: 'Masculino'},
    {usuario: "MarlonPerl", nombre: 'Marlon', apellido: "Perla", sexo: 'Masculino'},
    {usuario: "Lali", nombre: 'Laura', apellido: "Jimenez", sexo: 'Femenino'},
    {usuario: "Rack", nombre: 'Jimmy', apellido: "Tabares", sexo: 'Masculino'},
    {usuario: "War", nombre: 'Edwar', apellido: "Tabares", sexo: 'Masculino'},
    {usuario: "estefa", nombre: 'estefania', apellido: "sanchez", sexo: 'Femenino'},
    {usuario: "bam", nombre: 'Jose', apellido: "Ramirez", sexo: 'Masculino'},
  
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
