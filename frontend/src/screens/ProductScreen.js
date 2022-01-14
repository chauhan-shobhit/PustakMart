import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {Link, Outlet, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form, Container} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
//const product = products.find((p) => p._id == params.id)
import { useNavigate } from 'react-router-dom'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import Review from '../components/Review'


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

    const textBoxStyle = {
      width: '1600px',
      height: '200px',
  padding: '5px',
  border: '5px solid black',
  margin: '25px'
    }


  return (
  <>
  {loading ? <Loader/> : error ? <Message variant='danger'>{error} </Message> : (



<Row>
<Col md={6} className='pd-20'>
 <Container className="d-block mx-auto img-fluid w-50">
   <Image  src={product.imageUrl} alt={product.name}  style={{height:'600px'}}/>    
 </Container>
</Col>
<Col md={3}>
   <ListGroup variant='flush'>
       <ListGroup.Item>
           <h3>{product.name}</h3>
           <h5 style={{display: 'inline', textTransform: 'none'}}>by</h5>
           <h5 style={{color:'green', display: 'inline', textTransform: 'none'}}>{`  ${product.author}`}</h5>
           <br/><br/>
           
           <Rating value={product.rating} text={` ${product.numReviews} reviews`} />
       </ListGroup.Item>  
       <ListGroup.Item>
         
           <h2 style={{color:'black', display: 'inline'}}>{`$${product.salePrice} `}</h2>
           <h5 style={{color:'grey', display: 'inline'}}><del>${product.listPrice}</del></h5> 
           <h3 style={{display: 'inline'}}>  {`   |`} </h3>
           <h5 style={{color:'#d83e00', display: 'inline', textTransform: 'none'}}>{`    Save ${percSavings}%`}</h5>
           <br/><br/>
           <h5 style={{color:'black', textTransform: 'none'}}>{`${product.format} `}</h5>
           
       </ListGroup.Item>
      
   </ListGroup>


   <Card>
   <ListGroup >
       
         
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
           </Button>{' '}
            
           <Button type='button' variant="outline-dark" disabled= {product.availabilityStatus === 0} onClick = {addToCartHandler}>
               Sign In and Checkout
           </Button>

       </ListGroup.Item> 
   </ListGroup>
   </Card>
</Col>

<div style={textBoxStyle}>

{product.description}
  
</div>



</Row>







     
       

   )}
  </>
  )
}

export default ProductScreen    
/*

for different formats

<Button type='button' variant="outline-dark" size="sm" disabled= {product.paperbackAvailabilityStatus === 0} onClick = {formatSelectionHandler}>
Paperback
</Button>{' '}

<Button type='button' variant="outline-dark" size="sm" disabled= {product.HardcoverAvailabilityStatus === 0} onClick = {formatSelectionHandler}>
Hardcover
</Button>


For shipping dates 
{new Date().toLocaleString("en-US", { day : '2-digit'})}

{new Date().getDay()}
<Review/>
*/