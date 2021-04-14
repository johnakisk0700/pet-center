import { Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Product = ({product, match}) => {
    const img = product.images[0]
    return (
    <LinkContainer to={match.params.subcategory !== undefined ? `/${match.params.animal}/${match.params.category}/${match.params.subcategory}/proion/${product.pid}` : `/${match.params.animal}/${match.params.category}/proion/${product.pid}`}>
        <Col>
            <Card className='product'>
            <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}${img}`} />
            <Card.Body>
            <Card.Title className='h6'>{product.name}</Card.Title>
            <Card.Subtitle className='mb-1'>
                {product.marka}
            </Card.Subtitle>
            <Card.Subtitle>
                <i>Κωδ.:</i> #{product.pid}
            </Card.Subtitle>
            <Card.Text>
            </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    </LinkContainer>
    )
}

export default Product
