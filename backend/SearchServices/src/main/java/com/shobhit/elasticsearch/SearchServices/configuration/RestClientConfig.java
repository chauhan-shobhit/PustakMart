package com.shobhit.elasticsearch.SearchServices.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;

import lombok.extern.slf4j.Slf4j;

import org.apache.http.client.methods.HttpPost;
import org.elasticsearch.client.RestHighLevelClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Slf4j
@Configuration
public class RestClientConfig extends AbstractElasticsearchConfiguration {

    @Value("${spring.elasticsearch.rest.uris}")
    private String esURI;

    @Value("${spring.elasticsearch.rest.connection-timeout}")
    private int connectionTimeout;

    @Override
    @Bean
    public RestHighLevelClient elasticsearchClient() {

        final ClientConfiguration clientConfiguration = ClientConfiguration.builder().connectedTo(esURI)
                .withConnectTimeout(connectionTimeout).build();

        return RestClients.create(clientConfiguration).rest();

    }

}
