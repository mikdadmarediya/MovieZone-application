package com.example.MovieFavouriteService.proxy;

import com.example.MovieFavouriteService.exception.UserAlreadyExistsException;
import com.example.MovieFavouriteService.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name ="authentication-service", url = "localhost:8085")
public interface UserProxy {
    //method which is supposed to send data to authentication service
    @PostMapping("api/v1/register")
    public ResponseEntity saveUser(User user) throws UserAlreadyExistsException;
}
