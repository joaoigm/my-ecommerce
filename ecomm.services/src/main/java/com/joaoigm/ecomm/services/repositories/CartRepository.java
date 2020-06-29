package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.cart.Cart;
import com.joaoigm.ecomm.services.models.user.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CartRepository extends CrudRepository<Cart, Long> {

    Cart findByUser(User user);
    Cart findByUserId(Long id);
}
