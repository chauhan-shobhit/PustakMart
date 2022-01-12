package com.shobhit.elasticsearch.SearchServices.dao;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.shobhit.elasticsearch.SearchServices.model.Product;

import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.query.GetQuery;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class ProductDao {

    @Autowired
    private RestHighLevelClient restHighLevelClient;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private ElasticsearchOperations elasticsearchOperations;
    /*
     * public Product getProductById(String id) {
     * 
     * Product product = new Product("1", "productNameFromDao",
     * "productDescriptionFromDao", 20, 4.45);
     * return product;
     * 
     * }
     * 
     * public Product createProduct(Product product) {
     * 
     * return new Product("2", "productName2", "productDescription2", 30, 4.85);
     * 
     * }
     */

    public Product updateProductById(String id) {
        return null;
    }

    public List<Product> getAllProducts() {
        return null;
    }

    public void deleteAllProducts() {

    }

    public void deleteProductById(String id) {
    }

}
