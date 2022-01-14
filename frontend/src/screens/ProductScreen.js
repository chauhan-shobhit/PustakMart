import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Outlet, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
//const product = products.find((p) => p._id == params.id)
import { useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'


const ProductScreen = () => {
    const params = useParams()
    const  dispatch = useDispatch()  
//    const [product, setProduct] = useState({})
    const productDetails = useSelector(state => state.productDetails)
    const { error, product , loading } = productDetails
    const navigate = useNavigate()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const productReviewCreate = useSelector((state) => state.productReviewCreate)
    const {
      success: successProductReview,
      loading: loadingProductReview,
      error: errorProductReview,
    } = productReviewCreate

    useEffect(()=>{

 //       dispatch(listProductDetails(params.id))
/*
        const fetchProduct = async () => {
            //console.log(params.id)
            const { data } = await axios.get(`/api/products/${params.id}`) 

            setProduct(data)
        }   
        fetchProduct()
*/        

if (successProductReview) {
    setRating(0)
    setComment('')
  }
  if (!product._id || product._id !== params.id) {
    dispatch(listProductDetails(params.id))
    dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
  }
    },[]

    )
    
    const percSavings = Math.ceil((1 - (product.salePrice/product.listPrice))*100);
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
          createProductReview(params.id, {
            rating,
            comment,
          })
        )
      }
    const addToCartHandler = () => {
        
        const path = `/cart/${params.id}`
        console.log(path)
        navigate(path)
    }




  return (
  <>
  {loading ? <Loader/> : error ? <Message variant='danger'>{error} </Message> : (


 
  <Row>
    <Col md={6} className='pd-50'>
        <Image src={product.imageUrl} alt={product.name} fluid />    
    </Col>
    <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>    
            <ListGroup.Item>
                <Rating value={product.rating} text={` ${product.numReviews} reviews`} />
            </ListGroup.Item>  
            <ListGroup.Item>
              
            <h3 style={{color:'black', display: 'inline'}}>{`$${product.salePrice} `}</h3>
                <h5 style={{color:'grey', display: 'inline'}}><del>${product.listPrice}</del></h5> 
                <h5 style={{display: 'inline'}}>  {`   |`} </h5>
                <h5 style={{color:'#d83e00', display: 'inline', textTransform: 'none'}}>{`    Save${percSavings} %`}</h5>
                
                
            </ListGroup.Item>
            <ListGroup.Item>
                <strong>Description:</strong> ${product.description}
            </ListGroup.Item>
        </ListGroup>

    </Col>
    <Col md={3}>
        <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>
                        Price: 
                    </Col>
                    <Col>
                    <h4>{`$${product.salePrice} `}</h4>
                
                    </Col>
                </Row>
            </ListGroup.Item>    
            <ListGroup.Item>
                <Row>
                    <Col>
                        Status: 
                    </Col>
                    <Col>
                        {product.availabilityStatus > 0 ? "In Stock" : "out Of Stock"}
                    </Col>
                </Row>
            </ListGroup.Item>  
            <ListGroup.Item className="d-grid gap-2">
            <Button type='button' disabled= {product.availabilityStatus === 0} onClick = {addToCartHandler}>
                    Add to Cart
                </Button>

            </ListGroup.Item> 
        </ListGroup>
        </Card>
    </Col>
    <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
  </Row>
   )}
  </>
  )
}

export default ProductScreen    