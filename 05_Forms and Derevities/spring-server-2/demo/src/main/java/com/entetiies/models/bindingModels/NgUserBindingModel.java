package com.entetiies.models.bindingModels;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class NgUserBindingModel {
    @Pattern(regexp = "^.+@.+\\..+$")
    private String email;
    @Size(min = 5)
    private String username;
    @Size(min = 5)
    private String password;
    @Size(min = 10)
    private String address;
    @Size(min = 4)
    private String country;
    private String city;
    private String zipCode;
    private String mobile;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
