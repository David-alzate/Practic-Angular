import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre: String = "David"
  apellido: String = "Alzate"
  edad:number = 19
  // empresa:String = "UCO"
  textLogin:String = "No hay nadie registrado"

  habilitarButton=false;
  usuarioLogeado=false;

  getRegistroUsuario(){
    this.usuarioLogeado = false; 
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se ha registrado")
    // this.textLogin = "El usuario se ha registrado"

    if ((<HTMLInputElement>event.target).value == "si"){
      this.textLogin = "El usuario se ha registrado";
    }else{
      this.textLogin = "No hay nadie registrado";
    }
  }

}
