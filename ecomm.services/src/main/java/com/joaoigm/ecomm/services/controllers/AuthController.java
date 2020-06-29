package com.joaoigm.ecomm.services.controllers;

import com.joaoigm.ecomm.services.models.cart.Cart;
import com.joaoigm.ecomm.services.models.user.LoginRequest;
import com.joaoigm.ecomm.services.models.user.User;
import com.joaoigm.ecomm.services.repositories.CartRepository;
import com.joaoigm.ecomm.services.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody LoginRequest login){
        if(userRepository.existsByEmail(login.getEmail())){
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Já existe um usuário com esse email"));
        }
        User user = new User();
        user.setName(login.getName());
        user.setEmail(login.getEmail());
        user.setEncodedPassword(passwordEncoder.encode(login.getPassword()));
        userRepository.save(user);


        Cart userCart = new Cart();
        userCart.setUser(user);

        cartRepository.save(userCart);


        return ResponseEntity.status(204).body(null);
    }
}
