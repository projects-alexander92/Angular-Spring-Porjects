package com.services;

import com.entetiies.ORM.NgUser;
import com.entetiies.models.bindingModels.NgUserBindingModel;
import com.repositories.NgUserRepository;
import com.services.interfaces.NgUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NgUserServiceImpl implements NgUserService {
    private final NgUserRepository ngUserRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public NgUserServiceImpl(NgUserRepository ngUserRepository, ModelMapper modelMapper) {
        this.ngUserRepository = ngUserRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void saveNgUser(NgUserBindingModel ngUserBindingModel) {
        NgUser ngUser = this.modelMapper.map(ngUserBindingModel, NgUser.class);
        this.ngUserRepository.save(ngUser);
    }
}
