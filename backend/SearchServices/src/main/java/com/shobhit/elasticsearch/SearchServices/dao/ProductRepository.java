package com.shobhit.elasticsearch.SearchServices.dao;

import com.shobhit.elasticsearch.SearchServices.model.Product;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ProductRepository extends ElasticsearchRepository<Product, String> {

  @Query("{\"match\": {\"name\": {\"query\": \"?0\"}}}")
  Page<Product> findByName(String name, Pageable pageable);

}
