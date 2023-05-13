package com.example.MovieFavouriteService.service;

import com.example.MovieFavouriteService.exception.UserAlreadyExistsException;
import com.example.MovieFavouriteService.exception.UserNotFoundException;
import com.example.MovieFavouriteService.model.Movie;
import com.example.MovieFavouriteService.model.User;
import com.example.MovieFavouriteService.proxy.UserProxy;
import com.example.MovieFavouriteService.repository.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class UserMovieServiceImpl implements UserMovieService {


    @Autowired
    MovieRepository movieRepository;
    private UserProxy userProxy;

    @Autowired
    public UserMovieServiceImpl(MovieRepository movieRepository, UserProxy userProxy) {
        this.movieRepository = movieRepository;
        this.userProxy = userProxy;
    }

    @Override
    public Set<Movie> addToList(String userName, Movie movie) {
        User user = movieRepository.findById(userName).get();

        Set<Movie> movies=new HashSet<>();
        if (user.getList() == null){
//            user.setList(Arrays.asList(movie));
         movies.add(movie);
         user.setList(movies);
        }
        else {
            movies = user.getList();
            movies.add(movie);
            user.setList(movies);

        }


        movieRepository.save(user);
        return user.getList();
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        ResponseEntity res = userProxy.saveUser(user);
        System.out.println("Data saved on user authentication");
        System.out.println("The response is "+res.getBody());
        return movieRepository.save(user);
    }

    @Override
    public Set<Movie> removeFromList(String userName,String Id) {
        User user = movieRepository.findById(userName).get();
        Set<Movie> movies = user.getList();
        if (movies.removeIf(m->m.getId().equals(Id))){
            user.setList(movies);
            System.out.println("removed succcessfully...!");
        }
        else {
            System.out.println("it is not present in these list");
        }
        movieRepository.save(user);
        return user.getList();
    }

    @Override
    public User getUserDetails(String userName) throws UserNotFoundException {
        if (movieRepository.findById(userName).isEmpty()) {
            throw new UserNotFoundException();
        }
        return movieRepository.findById(userName).get();
    }

    @Override
    public Set<Movie> getCartDetails(String userName) {
        User user = movieRepository.findById(userName).get();
        Set<Movie> movies = user.getList();
        return movies;
    }

}
