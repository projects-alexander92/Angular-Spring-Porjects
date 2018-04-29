import {Component, OnInit} from '@angular/core';
import {PokemonModel} from './pokemon.interfaces';
import {PokemonService} from './pokemon.service';

@Component({
  templateUrl: './pokemon.component.html',
  providers: [PokemonService]
})

export class PokemonComponent implements OnInit {
  pokemonArray: Array<PokemonModel>;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

  submitForm(ev) {
    const pokemonName = ev.target.value;
    if (pokemonName.length > 0) {
      this.pokemonService.getAllPokemonsByNameIn(ev.target.value).subscribe((response) => {
        this.pokemonArray = response;
      });
    }
  }
}
