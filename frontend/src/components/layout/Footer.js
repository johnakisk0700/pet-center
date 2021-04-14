import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className='footer'>
                <Row>
                    <Col className='text-center py-3'> Πληροφορίες Καταστήματος </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
