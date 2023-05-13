package com.niit.authenticationservice.controller;

import com.niit.authenticationservice.domain.User;
import com.niit.authenticationservice.exception.UserAlreadyExistsException;
import com.niit.authenticationservice.exception.UserNotFoundException;
import com.niit.authenticationservice.security.SecurityTokenGenerator;
import com.niit.authenticationservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private ResponseEntity responseEntity;
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    // finch client
    @PostMapping("/register")
    public ResponseEntity saveUser(@RequestBody User user) throws UserAlreadyExistsException,UserNotFoundException {
        try {
            User createdUser = userService.saveUser(user);
        } catch (UserAlreadyExistsException e) {
            throw new UserAlreadyExistsException();
        }
        return responseEntity = new ResponseEntity<>("User Created", HttpStatus.CREATED);
    }

    // Second step - Should only give username and password
    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotFoundException
    {
        Map<String, String> map = null;
        try
        {
            User userObj = userService.findUserByUserNameAndPassword(user.getUserName(), user.getPassword());
            if (userObj.getUserName() == user.getUserName()) {
                map = securityTokenGenerator.generateToken(user);
            }
            responseEntity = new ResponseEntity(map, HttpStatus.OK);
            System.out.println("Logged In");
        }
        catch (UserNotFoundException e)
        {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }

}