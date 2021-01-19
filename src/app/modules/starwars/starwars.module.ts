import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsListComponent } from './components/star-wars-list/star-wars-list.component';
import { StarWarsSearcherComponent } from './components/star-wars-searcher/star-wars-searcher.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import {ToastModule} from 'primeng/toast';
const routes:Route[] = [
  {
    path:"",
    component:StarWarsSearcherComponent
  },
  {
    path:":name",
    component:StarWarsSearcherComponent
  }
]
@NgModule({
  declarations: [
    StarWarsSearcherComponent,
    StarWarsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export class StarwarsModule { }
