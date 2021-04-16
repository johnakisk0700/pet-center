import { Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import { useEffect, useState } from 'react'
const ProductExpanded = ({product}) => {
    const myImages = [] 
    product.images.forEach((image) => myImages.push({original: `${process.env.REACT_APP_API_URL}${image}`, thumbnail: `${process.env.REACT_APP_API_URL}${image}`}))
    const sizes = product.size[0].split(';')
    const [ xrwmata, setXrwmata ] = useState([])
    useEffect(() => {
        if(product.colors){
        const ftiakseTaXrwmata = () => {
            const colors = [...product.colors]
            colors.forEach((xrwma, i, colors) => {
                switch(xrwma){
                    case 'black':
                        colors[i] = 'Μαύρο'
                    break
                    case 'red':
                        colors[i] = 'Κόκκινο'
                    break
                    case 'blue':
                        colors[i] = 'Μπλέ'
                    break
                    case 'teal':
                        colors[i] = 'Γαλαζοπράσινο'
                    break
                    case 'purple':
                        colors[i] = 'Μώβ'
                    break
                    case 'orange':
                        colors[i] = 'Πορτοκαλί'
                    break
                    case 'lightgreen':
                        colors[i] = 'Λαχανί'
                    break
                    case 'violet':
                        colors[i] = 'Βιολετί'
                    break
                    case 'grey':
                        colors[i] = 'Γκρί'
                    break
                    case 'pink':
                        colors[i] = 'Ρόζ'
                    break
                    case 'lime':
                        colors[i] = 'Λάιμ'
                    break
                    case 'brown':
                        colors[i] = 'Καφέ'
                    break
                    case 'LightSkyBlue':
                        colors[i] = 'Γαλάζιο'
                    break
                    case 'white':
                        colors[i] = 'Άσπρο'
                    break
                }
            })
            setXrwmata(colors)
        }
        ftiakseTaXrwmata()}
    }, [product.colors])
    return (
        <Row xs={1} sm={1} md={2} className='product-expanded'>
            <Col>
                <ImageGallery items={myImages} showPlayButton={false} slideDuration={200}/>
            </Col>
            <Col className='text-center'>
                <h3>{product.name}</h3>
                <i>Κωδικός:</i> <p>#{product.pid}</p>
                <i>Περιγραφή:</i> <p>{product.description}</p>
                <i>Μεγέθη:</i>
                    <ul className='product-sizes'>
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
                                    <div>{xrwmata[i]}</div>
                                </div>
                            )
                        }else{
                            return (
                                <div className='mb-1 mt-1 colors justify-content-end'>
                                    <div>{xrwmata[i]}</div> 
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
