import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [{
  path: "",
  component:MainMenuComponent
},
{
  path: "starwars",
  loadChildren : () => import("./modules/starwars/starwars.module").then(
    m => m.StarwarsModule
  )
},
{
  path: "rickandmorty",
  loadChildren : () => import("./modules/rickmorty/rickmorty.module").then(
    m => m.RickmortyModule
  )
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
