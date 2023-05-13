package com.niit.authenticationservice.service;

import com.niit.authenticationservice.domain.User;
import com.niit.authenticationservice.exception.UserAlreadyExistsException;
import com.niit.authenticationservice.exception.UserNotFoundException;

public interface UserService {
    public User saveUser(User user) throws UserAlreadyExistsException, UserNotFoundException;
    public User findUserByUserNameAndPassword(String userName, String password) throws UserNotFoundException;
//    public boolean findUserByUserName(String userName) throws UserNotFoundException;
}
