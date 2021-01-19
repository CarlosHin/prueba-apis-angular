import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortySearcherComponent } from './components/rick-morty-searcher/rick-morty-searcher.component';
import { RickMortyListComponent } from './components/rick-morty-list/rick-morty-list.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { CharacterComponent } from './components/character/character.component';

const routes:Route[] = [
  {
    path:"",
    component:RickMortySearcherComponent
  },
  {
    path:":name",
    component:RickMortySearcherComponent
  },
  {
    path:"character/:id",
    component:CharacterComponent
  }
]

@NgModule({
  declarations: [RickMortySearcherComponent, RickMortyListComponent, CharacterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class RickmortyModule { }
