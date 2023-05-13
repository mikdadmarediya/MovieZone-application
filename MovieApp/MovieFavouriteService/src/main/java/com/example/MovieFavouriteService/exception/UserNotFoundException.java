package com.example.MovieFavouriteService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "User Not Found with the given userId")
public class UserNotFoundException extends Exception{
}
