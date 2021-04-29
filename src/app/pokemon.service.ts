import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  public getPokemon(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonsUrl}pokemon/${pokemonName}` );
  }
}
