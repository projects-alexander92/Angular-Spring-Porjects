package com.populateDb;

import com.entetiies.ORM.Pokemon;
import com.entetiies.models.jsonModels.PokemonJson;
import com.google.gson.Gson;
import com.io.CustomFileManagerImpl;
import com.repositories.PokemonRepository;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class PopulateDb
{
    private final PokemonRepository pokemonRepository;
    private final Gson gson;
    private final CustomFileManagerImpl customFileManager;

    public PopulateDb(PokemonRepository pokemonRepository, Gson gson, CustomFileManagerImpl customFileManager)
    {
        this.pokemonRepository = pokemonRepository;
        this.gson = gson;
        this.customFileManager = customFileManager;
    }

    public void addPokemonsFromJsonFile() throws IOException
    {
        String jsonString = this.customFileManager.convertFileToString("/files/pokedex.json");
        PokemonJson[] pokemonBaseJsons = gson.fromJson(jsonString, PokemonJson[].class);
        List<Pokemon> pokemonOrmArr = Arrays.stream(pokemonBaseJsons).map(e -> {
            Pokemon pokemon = new Pokemon();
            pokemon.seteName(e.geteName());
            pokemon.setAttack(e.getBaseJson().getAttack());
            pokemon.setDefence(e.getBaseJson().getDefence());
            pokemon.setHp(e.getBaseJson().getHp());
            pokemon.setSpeed(e.getBaseJson().getSpeed());
            return pokemon;
        }).collect(Collectors.toList());
        this.pokemonRepository.save(pokemonOrmArr);
    }
}
