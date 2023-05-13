package com.example.MovieFavouriteService.service;

import com.example.MovieFavouriteService.exception.UserAlreadyExistsException;
import com.example.MovieFavouriteService.exception.UserNotFoundException;
import com.example.MovieFavouriteService.model.Movie;
import com.example.MovieFavouriteService.model.User;


import java.util.Set;

public interface UserMovieService {
    public Set<Movie> addToList(String userName, Movie movie);

    public Set<Movie> removeFromList(String userName,String Id);

    public User registerUser(User userclass) throws UserAlreadyExistsException;

    public User getUserDetails(String userName) throws UserNotFoundException;

    public Set<Movie> getCartDetails(String userName);

}