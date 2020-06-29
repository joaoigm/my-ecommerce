package com.joaoigm.ecomm.services.controllers;

import com.joaoigm.ecomm.services.models.user.User;
import com.joaoigm.ecomm.services.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<User> getUser(@RequestParam(name = "email")String email){
        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException("User not found with email : " + email)
        );

        return ResponseEntity.ok(user);
    }
    @GetMapping("/orders")
    public ResponseEntity<User> getUserOrders(@RequestParam(name = "email")String email){
        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException("User not found with email : " + email)
        );

        return ResponseEntity.ok(user);
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User userToUpdate){
        User user = userRepository.findByEmail(userToUpdate.getEmail()).orElseThrow(() ->
                new UsernameNotFoundException("User not found with email : " + userToUpdate.getEmail())
        );

        user.setName(userToUpdate.getName());
        user.setAddress(userToUpdate.getAddress());
        user.setPhoneNumber(userToUpdate.getPhoneNumber());

        return ResponseEntity.ok(userRepository.save(user));
    }

}
