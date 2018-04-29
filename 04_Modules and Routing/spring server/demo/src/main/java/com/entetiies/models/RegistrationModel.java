package com.entetiies.models;

import com.entetiies.ORM.enums.Faction;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class RegistrationModel {

    @Size(min = 5)
    private String username;
    @Pattern(regexp = "^[\\w]{5,10}$")
    private String password;
    @NotNull
    private Faction faction;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Faction getFaction() {
        return faction;
    }

    public void setFaction(Faction faction) {
        this.faction = faction;
    }
}
