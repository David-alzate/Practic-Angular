import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  menu: Menu[] = [];

  constructor(private menuService: MenuService){}


  ngOnInit(): void {
    this.cargarMenu();
      
  }

  cargarMenu(){
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    })
  }

} 
