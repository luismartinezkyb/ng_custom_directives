import { Component, signal } from '@angular/core';

interface MenuItem{
  title:string;
  route:string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {title:'Contador', route:'counter'},
    {title:'Informacion', route:'user-info'},
    {title:'Actualizaciones', route:'properties'},
  ]);
  // public menuItems: MenuItem[] = [

  //   {title:'Contador', route:'counter'},
  //   {title:'Informacion', route:'user-info'},
  //   {title:'Actualizaciones', route:'properties'},
  // ];
}
