package com.joaoigm.ecomm.services.repositories;

import com.joaoigm.ecomm.services.models.user.Address;
import com.joaoigm.ecomm.services.models.user.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByName(String name);
    List<User> findAllByName(String name);

    List<User> findAllByAddress(Address address);

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
}
