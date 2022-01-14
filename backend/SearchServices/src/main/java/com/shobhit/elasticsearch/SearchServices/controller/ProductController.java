package com.shobhit.elasticsearch.SearchServices.controller;

import java.util.List;
import java.util.Map;

import com.shobhit.elasticsearch.SearchServices.dao.ProductDao;
import com.shobhit.elasticsearch.SearchServices.model.Product;
import com.shobhit.elasticsearch.SearchServices.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductDao productDao;

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> getProductById(@PathVariable String id) {

        Product availableProduct = productService.getProductById(id);

        return new ResponseEntity<>(availableProduct, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts() {

        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);

    }

    @GetMapping("/")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String keyword) {

        System.out.println("call received in getProducts");
        if (keyword == null || keyword.trim().isBlank()) {
            return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(productService.getProducts(keyword), HttpStatus.OK);
        }

    }

    @GetMapping("/top")
    public ResponseEntity<List<Product>> getTopFeaturedProducts() {
        System.out.println("call received in getTopFeaturedProducts");
        return new ResponseEntity<>(productService.getTopFeaturedProducts(), HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProductById(@PathVariable String id, @RequestBody Product product) {

        return new ResponseEntity<>(productService.updateProductById(id, product), HttpStatus.OK);

    }

    @PostMapping(path = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.createProduct(product), HttpStatus.CREATED);

    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<Void> deleteAllProducts() {

        productService.deleteAllProducts();
        return ResponseEntity.ok().<Void>build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductById(@PathVariable String id) {

        productService.deleteProductById(id);

        return ResponseEntity.ok().<Void>build();

    }

}
