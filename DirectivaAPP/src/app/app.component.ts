import { Component } from '@angular/core';

interface Entrada {
  titulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';

  mensaje: string = "";
  nombre: string = "asa";
  apellido: string = "";
  registrado = false;
  
  entradas = [
    {titulo: "Python"},
    {titulo: "Java"},
    {titulo: "C ++"},
    {titulo: "JavaScript"},
    {titulo: "Php"}
  ];

  constructor() {}

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "Usuario Registrado con exito";
  }
}