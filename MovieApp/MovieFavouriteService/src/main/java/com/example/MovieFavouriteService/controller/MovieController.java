package com.example.MovieFavouriteService.controller;

import com.example.MovieFavouriteService.exception.UserAlreadyExistsException;
import com.example.MovieFavouriteService.model.Movie;
import com.example.MovieFavouriteService.model.User;
import com.example.MovieFavouriteService.repository.MovieRepository;
import com.example.MovieFavouriteService.service.UserMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin("http://localhost:4200")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    UserMovieService movieService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        return new ResponseEntity<>(movieService.registerUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/movie/add/{userName}")
    public ResponseEntity<?> favouriteList(@RequestBody Movie movie, @PathVariable("userName") String userName){

        Set<Movie> set = movieService.addToList(userName,movie);
        return new ResponseEntity<>(set, HttpStatus.OK);
    }
    @DeleteMapping("/movie/delete/{userName}/{movieId}")
    public ResponseEntity<?> remove(@PathVariable("userName") String userName,@PathVariable String movieId){

        Set<Movie> set = movieService.removeFromList(userName,movieId);
        return new ResponseEntity<>(set, HttpStatus.OK);
    }
    @GetMapping("/movie/{userName}")
    public ResponseEntity<?> display(@PathVariable String userName){
        return new ResponseEntity<>(movieService.getCartDetails(userName), HttpStatus.OK);
    }

}
