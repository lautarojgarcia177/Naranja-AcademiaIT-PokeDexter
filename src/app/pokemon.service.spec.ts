import { TestBed } from '@angular/core/testing';
import { Pokemon } from './pokemon.interface';
import { PokemonService } from './pokemon.service';
import ditto from './ditto.json';

let httpClientSpy: { get: jasmine.Spy };

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected pokemon (HttpClient called once)', () => {
    const expectedPokemon: Pokemon = ditto;

    httpClientSpy.get.and.returnValue(expectedPokemon);

    service.getPokemon('ditto').subscribe(
      pokemon => expect(pokemon).toEqual(expectedPokemon, 'expected pokemon'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});

