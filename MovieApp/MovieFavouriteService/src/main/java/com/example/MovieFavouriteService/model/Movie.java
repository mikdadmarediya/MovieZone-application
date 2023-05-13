package com.example.MovieFavouriteService.model;

import lombok.*;
import org.springframework.data.annotation.Id;

@Data
public class Movie {
    @Id
    private String id;
    private String title;
    private String image;
    private String plot;
    private String  imDbRating;
    private String genres;
    private String directors;
    private String stars;
}
