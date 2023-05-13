package com.example.MovieFavouriteService.repository;

import com.example.MovieFavouriteService.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MovieRepository extends MongoRepository<User,String> {

}
