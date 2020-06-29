package com.joaoigm.ecomm.services.controllers;

import com.joaoigm.ecomm.services.models.product.Product;
import com.joaoigm.ecomm.services.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/products")
public class ProductsController {

    @Autowired
    private ProductRepository repository;

    @GetMapping
    public @ResponseBody Iterable<Product> getProducts(@RequestParam(defaultValue = "") String name) {
        if(!name.isEmpty()){
            return this.repository.findByNameLike("%"+name+"%");
        }
        return this.repository.findAll();
    }

    @GetMapping(path = "{id}")
    public @ResponseBody Product getProductById(@NonNull @PathVariable(name = "id")Long id){
        return this.repository.findById(id).get();
    }

    @PutMapping
    public @ResponseBody Product updateProduct(@RequestBody Product product){
        return this.repository.save(product);
    }

    @PutMapping("/all")
    public @ResponseBody
    Iterable<Product> updateProducts(@RequestBody List<Product> products){
        return this.repository.saveAll(products);
    }

    @PostMapping
    public @ResponseBody Product createProduct(@RequestBody Product product){
        return this.repository.save(product);
    }

    @PostMapping("/all")
    public @ResponseBody
    Iterable<Product> createProducts(@RequestBody List<Product> products){
        return this.repository.saveAll(products);
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity deleteProduct(@NonNull @PathVariable("id")Long id){
        this.repository.deleteById(id);
        return ResponseEntity.status(204).body(null);
    }
}
