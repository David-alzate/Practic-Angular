import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] = [

    new Empleado("David", "Alzate", "Estudiante", 4500),
    new Empleado("Santiago", "Jimenez", "Ing.Sistemas", 7000),
    new Empleado("Juan", "Lopez", "Estudiante", 4000),
    new Empleado("Esteban", "Rios", "Administrador", 4500),
  ]
}
 