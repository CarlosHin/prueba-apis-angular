import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient,) { }
  buscarPersonajeStarWars(nombre:string|null) :any{
    return this.http
      .get(environment.swapi_url + "people/?search=" + nombre).
      toPromise();   
  }
  async buscarPersonajeRickMorty(nombre:string|null) :Promise<any>{
    return await this.http
      .get( environment.rick_and_morty_url + "character/?name=" + nombre )
      .toPromise();
      
  }
  async buscarPersonajeRickMortyPorId(id:string|null){
    return await this.http
    .get( environment.rick_and_morty_url + "character/" + id )
    .toPromise();
  }

  getUrl(url:string) :any{
    return this.http
      .get( url ).toPromise();  
      
  }
}
