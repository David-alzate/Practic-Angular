import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

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

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


