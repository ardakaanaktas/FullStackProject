package com.codeWithArjun.fullstackbackend.controller;

import com.codeWithArjun.fullstackbackend.exceptions.UserNotFoundException;
import com.codeWithArjun.fullstackbackend.model.User;
import com.codeWithArjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/user")
    User newUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/api/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userRepository.findById(id).
                orElseThrow(()-> new UserNotFoundException(id));
    }

     @PutMapping("/api/user/{id}")
    public User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setEmail(newUser.getEmail());
                    user.setName(newUser.getName());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
     }

     @DeleteMapping("api/user/{id}")
    public String deleteUser(@PathVariable Long id){
        if (!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully.";
     }

     @DeleteMapping("/api/users/delete")
    public String deleteAllUser(){
        userRepository.deleteAll();
        return "All record has been deleted successfully";
     }
}
