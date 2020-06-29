package com.joaoigm.ecomm.services.controllers;

import com.joaoigm.ecomm.services.models.orders.Order;
import com.joaoigm.ecomm.services.models.orders.OrderProducts;
import com.joaoigm.ecomm.services.models.product.Product;
import com.joaoigm.ecomm.services.models.user.User;
import com.joaoigm.ecomm.services.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.CollectionTable;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/orders/{userId}")
public class OrdersController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartProductsRepository cartProductsRepository;
    @Autowired
    private OrderProductsRepository orderProductsRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    @Transactional
    public @ResponseBody
    ResponseEntity<?> createOrder(@PathVariable(name = "userId")Long userId, @RequestBody Order order) {
        if(!userRepository.existsById(userId)){
            return ResponseEntity.status(400).body(Collections.singletonMap("message", "Usuário inexistente com ID: " + userId));
        }
        if(order.getProducts().isEmpty()){
            return ResponseEntity.status(400).body(Collections.singletonMap("message", "A ordem de pedido deve conter ao menos 1 produto"));
        }
        User user = userRepository.findById(userId).get();
        Order orderToSave = new Order();
        orderToSave.setUser(user);
        orderToSave.setOrderDate(LocalDateTime.now());
        orderToSave.setTotalPrice(order.getTotalPrice());
        orderRepository.save(orderToSave);

        List<OrderProducts> products = new ArrayList<OrderProducts>();

        order.getProducts().forEach(p -> {
            products.add(new OrderProducts(orderToSave, p.getProduct(), p.getQuantity()));
        });
        orderProductsRepository.saveAll(products);

        products.forEach(p -> {
            Product product = p.getProduct();
            product.setStock(product.getStock() - p.getQuantity());
            productRepository.save(product);
        });

        cleanUserCart(userId);
        return ResponseEntity.ok(orderRepository.findById(orderToSave.getId()).get());
    }

    @GetMapping
    public @ResponseBody
    ResponseEntity<?> getUserOrders(@PathVariable(name = "userId")Long userId){
        if(!userRepository.existsById(userId)){
            return ResponseEntity.status(400).body(Collections.singletonMap("message", "Usuário inexistente com ID: " + userId));
        }
        return ResponseEntity.ok(orderRepository.findAllByUserId(userId));
    }

    private void cleanUserCart(Long userId) {
        cartProductsRepository.deleteByCartId(cartRepository.findByUserId(userId).getId());
    }
}
