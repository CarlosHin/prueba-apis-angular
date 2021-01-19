import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/search.service';
import {MessageService} from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rick-morty-searcher',
  templateUrl: './rick-morty-searcher.component.html',
  styleUrls: ['./rick-morty-searcher.component.css'],
  providers: [MessageService]
})
export class RickMortySearcherComponent implements OnInit {
  lista:Object[]=[];
  loading:boolean=false;
  form = new FormGroup({
    "name": new FormControl("", Validators.required)
  });
  constructor(
    private buscador:SearchService,
    private activatedroute:ActivatedRoute,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    if(this.activatedroute.snapshot.paramMap.get("name")){
      this.form.value.name=this.activatedroute.snapshot.paramMap.get("name")
      this.buscar();
    }
  }
  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async buscar(){
    this.loading = true;
    this.lista = [];
    await this.sleep(500);
    try {
      let resultado = await this.buscador.buscarPersonajeRickMorty(this.form.value.name)
      console.log(resultado)
      this.loading = false;
      this.lista = resultado.results;
    } catch (error) {
      this.showError("No se han encontrado resultados");
      this.loading = false;
    }

  }
  showError(str:string) {
    this.messageService.add({
      severity:'error', 
      summary:'Error', 
      detail:str
    });
  }
}
