package com.niit.MovieService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin("http://localhost:4200")
public class MovieController {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/movie")
    public ResponseEntity<?> getallMovie(){
        String result = restTemplate.getForObject("https://imdb-api.com/en/API/InTheaters/k_rc3nk1ne", String.class);
        System.out.println(result);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
}
