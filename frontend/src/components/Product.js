import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        
        <Card className='my-3 p-3 rounded' style={{ width: '15rem' }}>
             <Link to={`/product/${product.id}`}>
                <Card.Img src={product.imageUrl} variant='top' />
            </Link>
            
            <Card.Body>
            <Link to={`/product/${product.id}`}>
                    <Card.Title as='div' style={{fontSize:'40px'}}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
            
            <Card.Text as='div' >
                <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} reviews`}/>
            </Card.Text>


            <Card.Text  >
                <h4>{`$${product.salePrice} `}</h4>
                <h5><del>${product.listPrice}</del></h5>
            </Card.Text>
            <Card.Text  >
                  
            </Card.Text>


        </Card>
        
    )
}

export default Product
