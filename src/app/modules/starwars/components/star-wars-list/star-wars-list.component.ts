import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-list',
  templateUrl: './star-wars-list.component.html',
  styleUrls: ['./star-wars-list.component.css']
})
export class StarWarsListComponent implements OnInit {
  @Input() lista:any[]=[];
  display: boolean = false;
  actual:any = {};

  showDialog(actual:Object) {
      this.actual= actual;
      this.display = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
