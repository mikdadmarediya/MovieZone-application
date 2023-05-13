package com.niit.authenticationservice.service;

import com.niit.authenticationservice.domain.User;
import com.niit.authenticationservice.exception.UserAlreadyExistsException;
import com.niit.authenticationservice.exception.UserNotFoundException;
import com.niit.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistsException, UserNotFoundException {
        User a=userRepository.findUserByUserName(user.getUserName());
        if(a==null)
        {
            System.out.println(user);
            return userRepository.save(user);

        }
        else {
            System.out.println("User already exists, try registering with a different UserName");
            throw new UserAlreadyExistsException();
        }
    }

    @Override
    public User findUserByUserNameAndPassword(String userName, String password) throws UserNotFoundException {
        System.out.println("userName"+userName);
        System.out.println("password"+password);
        User user = userRepository.findUserByUserNameAndPassword(userName,password);
        System.out.println(user);
        if (user == null) {
            throw new UserNotFoundException();
        }
        return user;
    }

//    @Override
//    public boolean findUserByUserName(String userName) throws UserNotFoundException {
//        User res= userRepository.findUserByUserName(userName) ;
//        if (res == null) {
//            return true;
//        }
//        return false;
//    }
}
