import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../../search.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-star-wars-searcher',
  templateUrl: './star-wars-searcher.component.html',
  styleUrls: ['./star-wars-searcher.component.css'],
  providers: [MessageService]
})
export class StarWarsSearcherComponent implements OnInit {
  lista:Object[]=[];
  loading:boolean=false;
  dataBar: any;
  showBar:boolean=false;
  noResults:boolean=false;


  form = new FormGroup({
    "name": new FormControl("", Validators.required)
  });

  constructor( 
    private buscador:SearchService,
    private activatedroute:ActivatedRoute,
    private messageService: MessageService
  ) { 
    this.dataBar = {
      labels: [],
      datasets: [
          {
              label: 'Altura',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: []
          },
          {
            label: 'Peso',
            backgroundColor: '#339977',
            borderColor: '#1E88E5',
            data: []
        }
      ]
  }

  }

  ngOnInit(): void {
    if(this.activatedroute.snapshot.paramMap.get("name")){
      this.form.value.name = this.activatedroute.snapshot.paramMap.get("name");
      this.buscar();
    }
  }


  async buscar(){
    this.loading = true;
    this.lista = [];
    this.showBar = false;
    this.noResults=false;
    let resultado = await this.buscador.buscarPersonajeStarWars(this.form.value.name);
    this.form.value.name;
    this.loading = false;
    this.lista = resultado.results;
    if(this.lista.length >0) this.setChart();
    else{
      this.noResults=true;
      this.showError("No se han encontrado personajes");
    } 
  }
  showError(str:string) {
    this.messageService.add({
      severity:'error', 
      summary:'Error', 
      detail:str
    });
  }
  
  setChart(){
    this.dataBar = {
      labels: [],
      datasets: [
          {
              label: 'Altura',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: []
          },
          {
            label: 'Peso',
            backgroundColor: '#339977',
            borderColor: '#1E88E5',
            data: []
        }
      ]
    }
    this.dataBar.labels = this.lista.map((el:any) => el.name)
    this.dataBar.datasets[0].data = this.lista.map((el:any) => el.height)
    this.dataBar.datasets[1].data = this.lista.map((el:any) => el.mass)
    this.showBar = true;
  }

}
