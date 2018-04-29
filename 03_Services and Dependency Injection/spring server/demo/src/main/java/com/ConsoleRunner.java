package com;

import com.populateDb.PopulateDb;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;


@SpringBootApplication
@Component
public class ConsoleRunner implements CommandLineRunner
{
    private final PopulateDb populateDb;
    /* Да се попълни базата трябва да се разкоментира this.populateDb.addPokemonsFromJsonFile();*/
    @Autowired
    public ConsoleRunner(PopulateDb populateDb)
    {
        this.populateDb = populateDb;
    }

    @Override
    public void run(String... args) throws Exception
    {
        this.populateDb.addPokemonsFromJsonFile();
    }
}
