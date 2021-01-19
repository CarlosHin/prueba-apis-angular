import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  id:string|null ="";
  name:string="";
  image:string="";
  species:string="";
  status:string="";
  gender:string="";
  origin:string="";
  constructor(
    private buscador:SearchService,
    private activatedroute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.activatedroute.snapshot.paramMap.get("id")){
      this.id=this.activatedroute.snapshot.paramMap.get("id")
      this.buscar();
    }else{
      alert("Error, no se ha entragado el parametro")
    }
  }

  async buscar(){
    try {
      let resultado:any = await this.buscador.buscarPersonajeRickMortyPorId(this.id)  
      console.log(resultado)
      this.name=resultado.name;
      this.image=resultado.image;
      this.species=resultado.species;
      this.status=resultado.status;
      this.gender=resultado.gender;
      this.origin=resultado.origin.name;
    } catch (error) {
      console.log("Error")
    }

  }

}
