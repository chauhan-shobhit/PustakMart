package com.shobhit.elasticsearch.SearchServices.service;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;
import java.util.Iterator;
import com.shobhit.elasticsearch.SearchServices.dao.ProductDao;
import com.shobhit.elasticsearch.SearchServices.dao.ProductRepository;
import com.shobhit.elasticsearch.SearchServices.model.Product;
import com.shobhit.elasticsearch.SearchServices.model.exception.ProductAlreadyExistException;
import com.shobhit.elasticsearch.SearchServices.model.exception.ProductNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProductService {

  @Autowired
  private ProductDao productDao;

  @Autowired
  private ProductRepository productRepository;

  private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ProductService.class);

  /* Retrieve Product */

  public Product getProductById(String id) {

    if (productRepository.findById(id).isEmpty()) {

      throw new ProductNotFoundException("Product with ID " + id + " not found");

    } else {

      return productRepository.findById(id).get();
    }

  }

  public List<Product> getAllProducts() {

    List<Product> productsList = new ArrayList<>();

    Iterable<Product> prodIter = productRepository.findAll();

    prodIter.iterator().forEachRemaining(productsList::add);

    return productsList;

  }

  public List<Product> getProducts(String keyword) {
    Page<Product> productPages = productRepository.findByName(keyword, null);
    List<Product> productsList = productPages.getContent();

    return productsList;
  }

  public List<Product> getTopFeaturedProducts() {
    List<Product> productsList = new ArrayList<>();

    Iterator<Product> prodIter = productRepository.findAll().iterator();

    // System.out.println(prodIter.iterator().next().getAuthor());

    int n = 3;
    while (n > 0) {
      Product product = prodIter.next();
      productsList.add(product);
      n--;
    }
    return productsList;
  }

  /* Update Product */

  public ResponseEntity<Object> updateProductById(String id, Product product) {
    Optional<Product> productOptional = productRepository.findById(id);

    if (!productOptional.isEmpty()) {
      return ResponseEntity.notFound().build();
    }

    productRepository.save(product);

    return ResponseEntity.accepted().build();

  }

  /* Delete Product */

  public void deleteProductById(String id) {

    productRepository.deleteById(id);
  }

  public void deleteAllProducts() {
    productRepository.deleteAll();
  }

  /* Create Product */

  public Product createProduct(Product product) {

    Product savedProduct;// = productRepository.save(product);

    if (productRepository.findByName(product.getName(), null).isEmpty()) {

      savedProduct = productRepository.save(product);

    } else {

      throw new ProductAlreadyExistException("Product with name " + product.getName() + " already exists");

    }

    return savedProduct;

  }

}
