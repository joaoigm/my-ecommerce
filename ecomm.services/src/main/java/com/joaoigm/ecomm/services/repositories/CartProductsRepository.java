package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.cart.CartProducts;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartProductsRepository extends CrudRepository<CartProducts, Long> {
    void deleteByCartId(Long id);

    List<CartProducts> findAllByCartId(Long id);
}
