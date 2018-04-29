package com.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// "to test authorization"  controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController
{

    //трябва да върне "getHome"
    @GetMapping("/home")
    private ResponseEntity getHome()
    {
        return new ResponseEntity<>("pesho", HttpStatus.OK);
    }

    //трябва да върне 403, ако няма token
    @GetMapping("/resource")
    private String gertResurce()
    {
        return "getHome";
    }
}
