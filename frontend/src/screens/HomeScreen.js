import {React,  useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { useParams} from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'


const divStyle = {
    color: 'blue',
    backgroundImage: 'url("/images/logo.png")',
  };

const HomeScreen = () => {


    const dispatch = useDispatch()
    const params = useParams()
    const keyword = params.keyword

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(()=>{
       
        dispatch(listProducts(keyword))

        },[dispatch, keyword]
    )

  

    return (
        <div >
    
    <ProductCarousel />
        {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message> :
         <Row>
             {products.map(product => (
                 <Col key={product.id} sm={12} md={6}    lg={4} xl={3}>
                    <Product product={product}></Product>
                 </Col>

             ))}
         </Row>
}

        </div>
    )
}

export default HomeScreen