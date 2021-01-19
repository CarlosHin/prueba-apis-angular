import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rick-morty-list',
  templateUrl: './rick-morty-list.component.html',
  styleUrls: ['./rick-morty-list.component.css']
})
export class RickMortyListComponent implements OnInit {
  @Input() lista:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
