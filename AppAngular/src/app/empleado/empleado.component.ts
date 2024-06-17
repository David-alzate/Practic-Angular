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

}
