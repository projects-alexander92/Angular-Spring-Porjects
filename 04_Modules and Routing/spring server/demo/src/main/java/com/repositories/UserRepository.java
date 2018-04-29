package com.repositories;

import com.entetiies.ORM.User;
import com.entetiies.ORM.enums.Faction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query("select u.faction from  User as u where u.username = :username")
    Faction getFactionByUsername(@Param(value = "username") String username);


}
