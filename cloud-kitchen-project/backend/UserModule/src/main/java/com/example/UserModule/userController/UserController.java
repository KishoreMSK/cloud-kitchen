package com.example.UserModule.userController;

import com.example.UserModule.Authenticate;
import com.example.UserModule.User;
import com.example.UserModule.userService.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserServiceInterface userServiceInterface;
    @PostMapping("/createUser")
    public int createUser(@RequestBody User user) {
        System.out.println (user.toString ());
        return userServiceInterface.createUser(user);
    }

    @PostMapping("/validateUser")
    public boolean validateUser(@RequestBody Authenticate authenticate) {
        boolean validate = false;
        try {
             validate= userServiceInterface.validateUser (authenticate);
        }catch (Exception e)
        {
            //e.printStackTrace ();
        }
        return validate;
    }
    @PostMapping("/updateUser")
    public User updateUser(@RequestBody User user)
    {
        return userServiceInterface.updateUser (user);
    }
    @GetMapping("/deleteUser/{userId}")
    public long deleteUser(@PathVariable int userId)
    {
        return userServiceInterface.deleteUser (userId);
    }
    @GetMapping("/getAllUserDetails")
    public List <User> getAllUserDetails()
    {
        return userServiceInterface.getAllUserDetails ();
    }
}
