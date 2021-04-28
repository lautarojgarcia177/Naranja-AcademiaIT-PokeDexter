import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

const routes: Routes = [
  { path: '**', component: SearchPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
