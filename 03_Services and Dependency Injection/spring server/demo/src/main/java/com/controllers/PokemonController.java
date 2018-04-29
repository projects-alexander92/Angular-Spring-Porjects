package com.controllers;

import com.entetiies.ORM.Pokemon;
import com.services.interfaces.PokemonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/pokemons/all/{name}")
    public ResponseEntity getPokemonsByNameIn(@PathVariable String name) {

        Set<Pokemon> pokemons = this.pokemonService.getAllByNameIn(name);
        return new ResponseEntity<>(pokemons, HttpStatus.OK);
    }
}
