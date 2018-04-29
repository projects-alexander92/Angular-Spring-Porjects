package com.repositories;

import com.entetiies.ORM.Pokemon;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, Long>
{
    Set<Pokemon> getAllByENameContaining(String containing);
}
