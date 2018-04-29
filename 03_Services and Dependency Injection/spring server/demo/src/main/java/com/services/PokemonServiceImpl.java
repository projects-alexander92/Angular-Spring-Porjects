package com.services;

import com.entetiies.ORM.Pokemon;
import com.repositories.PokemonRepository;
import com.services.interfaces.PokemonService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PokemonServiceImpl implements PokemonService {
    private final PokemonRepository pokemonRepository;

    public PokemonServiceImpl(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    @Override
    public Set<Pokemon> getAllByNameIn(String name) {
        return this.pokemonRepository.getAllByENameContaining(name);
    }
}
