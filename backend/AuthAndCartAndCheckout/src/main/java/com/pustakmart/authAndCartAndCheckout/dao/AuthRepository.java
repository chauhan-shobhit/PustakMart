package com.pustakmart.authAndCartAndCheckout.dao;

import com.pustakmart.authAndCartAndCheckout.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AuthRepository extends MongoRepository<User, String> {

    @Query("{email:'?0'}")
    User findUserByEmail(String email);

}
