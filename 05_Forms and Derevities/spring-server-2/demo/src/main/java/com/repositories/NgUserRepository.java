package com.repositories;

import com.entetiies.ORM.NgUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NgUserRepository extends CrudRepository<NgUser, Long>{
}
