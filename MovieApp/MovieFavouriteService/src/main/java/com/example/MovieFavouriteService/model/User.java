package com.example.MovieFavouriteService.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Set;

@Data
@Document
public class User {
    @Id
    String userName;
    String password;
    String email;
    long contactno;
    Set<Movie> list;
}
