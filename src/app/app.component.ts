import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaNGPrime';
  items: MenuItem[];
  constructor(private activatedroute:ActivatedRoute) {
    this.items =  [
      {label: 'Home', icon: 'pi pi-fw pi-home' ,"routerLink": "/"},
      {label: 'StarWars', icon: 'pi pi-fw pi-star' ,"routerLink": "/starwars"},
      {label: 'Rick y Morty', icon: 'pi pi-fw pi-android',"routerLink": "/rickandmorty"}
    ];
  }

  ngOnInit() {
      
  }
}
