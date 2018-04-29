package com.services.interfaces;

import com.entetiies.ORM.Pokemon;

import java.util.Set;

public interface PokemonService {
    Set<Pokemon> getAllByNameIn(String name);
}
