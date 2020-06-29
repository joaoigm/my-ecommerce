package com.joaoigm.ecomm.services.controllers;

import com.joaoigm.ecomm.services.models.cart.CartProducts;
import com.joaoigm.ecomm.services.repositories.CartProductsRepository;
import com.joaoigm.ecomm.services.repositories.CartRepository;
import com.joaoigm.ecomm.services.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import javax.transaction.Transactional;
import java.util.List;


@RestController
@RequestMapping("api/cart/{userId}")
public class CartController {

    @Autowired
    private CartRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    CartProductsRepository cartProductsRepository;

    @GetMapping
    @Transactional
    public @ResponseBody
    ResponseEntity<List<CartProducts>> getCart(@PathVariable(name = "userId")Long userId) {
        if(userRepository.existsById(userId)){
            return ResponseEntity.ok(repository.findByUserId(userId).getCartProducts());
        }
        return ResponseEntity.status(400).body(null);
    }

    @Transactional
    @PostMapping
    public @ResponseBody
    ResponseEntity<List<CartProducts>> addProdutToCart(@PathVariable(name = "userId")Long userId, @RequestBody CartProducts product) {
        if(userRepository.existsById(userId)){
            product.setCart(repository.findByUserId(userId));
            cartProductsRepository.save(product);
            return ResponseEntity.ok(cartProductsRepository.findAllByCartId(repository.findByUserId(userId).getId()));
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PutMapping
    @Transactional
    public @ResponseBody
    ResponseEntity<Iterable<CartProducts>> getCart(@PathVariable(name = "userId")Long userId, @RequestBody List<CartProducts> products){
        if(userRepository.existsById(userId)){
            products.forEach(p -> {
                if(p.getQuantity() <= 0){
                    cartProductsRepository.deleteById(p.getId());
                } else {
                    CartProducts product = cartProductsRepository.findById(p.getId()).get();
                    product.setQuantity(p.getQuantity());
                    cartProductsRepository.save(product);
                }
            });
            return ResponseEntity.ok(cartProductsRepository.findAllByCartId(repository.findByUserId(userId).getId()));
        }
        return ResponseEntity.badRequest().body(null);
    }

}
