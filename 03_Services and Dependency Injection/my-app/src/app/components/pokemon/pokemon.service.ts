import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PokemonModel} from './pokemon.interfaces';

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPokemonsByNameIn(name: string): Observable<PokemonModel[]> {
    return this.httpClient.get<PokemonModel[]>('http://localhost:8080/pokemons/all/' + name);
  }
}
