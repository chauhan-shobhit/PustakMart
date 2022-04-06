package com.pustakmart.authAndCartAndCheckout.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;

@Configuration
@EnableSwagger2
public class SpringFoxConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("com.pustakmart.authAndCartAndCheckout"))
                // .apis(RequestHandlerSelectors.any()) //for enabling all endpoints
                // including actuators, errors, operational
                .paths(PathSelectors.any()).build().apiInfo(apiInfo());

    }

    ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("AuthAndCartnCheckout").description("Auth And Cart and Checkout")
                .termsOfServiceUrl("").version("1.0.0").build();
    }

}