import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  public pokemonName: string;
  public pokemon: Pokemon;
  public thereWasError = false;

  constructor(private pokemonService: PokemonService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  public btnSearch_Click(): void {
    this.spinner.show();
    this.pokemonService.getPokemon(this.pokemonName).subscribe(
      pokemon => this.pokemon = pokemon,
      () => {
        this.spinner.hide();
        Swal.fire({
          title: 'Error!',
          text: 'No se encuentra ese Pokemon',
          icon: 'error',
          confirmButtonText: 'Buscar otro!'
        })
      },
      () => this.spinner.hide()
    );
  }

}