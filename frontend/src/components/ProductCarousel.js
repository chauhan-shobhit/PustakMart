import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'


const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  const imageUrls = ['/images/Gateway_Quote_A2_01-11.jpeg', 
                '/images/Gateway_Quote_A1_01-11.jpeg',
              '/images/Gateway_Quote_A2_12-21.jpeg',
            '/images/Gateway_Quote_A1_01-04.jpeg',
          '/images/new_Image.png']

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container fluid>
    <Carousel pause='hover' >
     
      {imageUrls.map((image) => (
        <Carousel.Item >
            <Image src={image} />
        </Carousel.Item>
        
      ))}
     
    </Carousel>
    </Container>
  )
}

export default ProductCarousel