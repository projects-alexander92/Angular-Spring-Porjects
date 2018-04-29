package com.controllers;

import com.entetiies.models.bindingModels.NgUserBindingModel;
import com.services.interfaces.NgUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NgUserController {
    private final NgUserService ngUserService;

    public NgUserController(NgUserService ngUserService) {
        this.ngUserService = ngUserService;
    }

    @PostMapping("/ng-user/add")
    public ResponseEntity saveUser(@Valid @RequestBody NgUserBindingModel ngUserBindingModel, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        this.ngUserService.saveNgUser(ngUserBindingModel);
        return new ResponseEntity(HttpStatus.OK);
    }
}
