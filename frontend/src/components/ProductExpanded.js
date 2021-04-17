import { Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import {xrwmata} from './layout/translate'
import { useState } from 'react'
const ProductExpanded = ({product}) => {
    const [ showNav, setShowNav ] = useState(false)    
    const myImages = [] 
    product.images.forEach((image) => myImages.push({original: `${process.env.REACT_APP_API_URL}${image}`, thumbnail: `${process.env.REACT_APP_API_URL}${image}`}))
    const sizes = product.size[0].split(';')
    return (
        <Row xs={1} sm={1} md={2} className='product-expanded'>
            <Col className='mt-5 mb-5' onMouseOver={()=>setShowNav(true)} onMouseLeave={() => setShowNav(false)}>
                <ImageGallery items={myImages} showPlayButton={false} showNav={showNav} showIndex={showNav} showFullscreenButton={showNav} slideDuration={250}/>
            </Col>
            <Col className='text-center mt-5'>
                <h3>{product.name}</h3>
                <i>Κωδικός:</i> <p>#{product.pid}</p>
                <i>Περιγραφή:</i> <p>{product.description}</p>
                <i>Μεγέθη:</i>
                    <ul className='product-sizes mb-3'>
                        {sizes.map((size, i)=> <li key={size + i}>{size}</li>)}
                    </ul>
                {product.colors && <> 
                    <i>Χρώματα:</i>
                    <Row xs={2} className='m-0 mb-3'> 
                        {product.colors.map((color, i) => {
                        if(i % 2 !== 0){
                            return (
                                <div className='mb-1 mt-1 colors'> 
                                    <div key={color + i} style={{backgroundColor: `${color}`, minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', marginRight: '0.4rem', marginLeft: '0.1rem', padding: '0.5rem', border: `${color==='white'? '1px solid grey' : ''}`}} />
                                    <div>{xrwmata[color]}</div>
                                </div>
                            )
                        }else{
                            return (
                                <div className='mb-1 mt-1 colors justify-content-end'>
                                    <div>{xrwmata[color]}</div> 
                                    <div key={color + i} style={{backgroundColor: `${color}`, minWidth: '1.5rem', height: '1.5rem', borderRadius: '50%', marginLeft: '0.4rem', marginRight: '0.1rem', border: `${color==='white'? '1px solid grey' : ''}`}} />  
                                </div>
                            )
                        }
                        })}
                    </Row>
                </>} 
            </Col>
        </Row>
    )
}

export default ProductExpanded
