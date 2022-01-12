package com.shobhit.elasticsearch.SearchServices.model;

import java.util.List;

import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "products", type = "product")
public class Product {

    private String id;
    private String name;
    private String description;
    private int availabilityStatus;
    private double listPrice;
    private double salePrice;
    private String skuType;
    private String bopusEligibleMessage;
    private String imageUrl;
    private int rating;
    private int numReviews;
    private List<Review> reviews;
    private String author;
    private String format;

    public Product(String id, String name, String description, Integer availabilityStatus, double listPrice,
            double salePrice, String skuType, String bopusEligibleMessage) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.availabilityStatus = availabilityStatus;
        this.listPrice = listPrice;
        this.salePrice = salePrice;
        this.skuType = skuType;
        this.bopusEligibleMessage = bopusEligibleMessage;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return int return the availabilityStatus
     */
    public int getAvailabilityStatus() {
        return availabilityStatus;
    }

    /**
     * @param availabilityStatus the availabilityStatus to set
     */
    public void setAvailabilityStatus(int availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    /**
     * @return double return the listPrice
     */
    public double getListPrice() {
        return listPrice;
    }

    /**
     * @param listPrice the listPrice to set
     */
    public void setListPrice(double listPrice) {
        this.listPrice = listPrice;
    }

    /**
     * @return double return the salePrice
     */
    public double getSalePrice() {
        return salePrice;
    }

    /**
     * @param salePrice the salePrice to set
     */
    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    /**
     * @return String return the skuType
     */
    public String getSkuType() {
        return skuType;
    }

    /**
     * @param skuType the skuType to set
     */
    public void setSkuType(String skuType) {
        this.skuType = skuType;
    }

    /**
     * @return String return the bopusEligibleMessage
     */
    public String getBopusEligibleMessage() {
        return bopusEligibleMessage;
    }

    /**
     * @param bopusEligibleMessage the bopusEligibleMessage to set
     */
    public void setBopusEligibleMessage(String bopusEligibleMessage) {
        this.bopusEligibleMessage = bopusEligibleMessage;
    }

    /**
     * @return String return the imageUrl
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * @param imageUrl the imageUrl to set
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * @return String return the rating
     */
    public int getRating() {
        return rating;
    }

    /**
     * @param rating the rating to set
     */
    public void setRating(int rating) {
        this.rating = rating;
    }

    /**
     * @return String return the numReviews
     */
    public int getNumReviews() {
        return numReviews;
    }

    /**
     * @param numReviews the numReviews to set
     */
    public void setNumReviews(int numReviews) {
        this.numReviews = numReviews;
    }

    /**
     * @return List<Review> return the reviews
     */
    public List<Review> getReviews() {
        return reviews;
    }

    /**
     * @param reviews the reviews to set
     */
    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    /**
     * @return String return the author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * @return String return the format
     */
    public String getFormat() {
        return format;
    }

    /**
     * @param format the format to set
     */
    public void setFormat(String format) {
        this.format = format;
    }

}
