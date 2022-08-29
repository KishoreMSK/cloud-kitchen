package com.example.UserModule.userService;

import com.example.UserModule.Authenticate;
import com.example.UserModule.User;

import java.util.List;

public interface UserServiceInterface {
    public int createUser(User user);
    public boolean validateUser(Authenticate authenticate);
    public User updateUser(User user);
    public long deleteUser(int userId);
    public List <User> getAllUserDetails();
    //public List<Order> ordersMadeByCustomer(int userId);
}
