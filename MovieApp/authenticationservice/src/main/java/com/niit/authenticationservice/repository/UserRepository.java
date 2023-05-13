package com.niit.authenticationservice.repository;

import com.niit.authenticationservice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User findUserByUserNameAndPassword(String userName, String password);
    public User findUserByUserName(String userName);
}
