package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.product.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    Product findByName(String name);

    List<Product> findByNameLike(String name);
}
