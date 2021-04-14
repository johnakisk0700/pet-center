import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MenuRect = (props) => {
    return (
        <LinkContainer to={props.url}>
            <Col xs={5} sm={4} md={3} lg={2} xl className='menu-rect justify-content-between text-center m-2'>
                <div className='image-wrapper-menu'>
                    <img src={props.img} alt='...' />
                </div>
                <div className='dont-break'>{props.title}</div>
            </Col>
        </LinkContainer>
    )
}

export default MenuRect
