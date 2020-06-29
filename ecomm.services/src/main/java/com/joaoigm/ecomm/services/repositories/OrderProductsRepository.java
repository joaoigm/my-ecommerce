package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.orders.OrderProducts;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductsRepository extends CrudRepository<OrderProducts, Long> {
}
