import { Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Zwaki = (props) => {
    return (
        <LinkContainer to={props.url}>
            <Col  xl className='zwaki text-center mx-2 my-1 mb-2'>
                <div className='zwaki-title'>{props.title}</div>
                <div className='zwaki-img-wrapper'>
                    <img src={props.img} alt='...' style={props.diorthwsh}/>
                </div>
            </Col>
        </LinkContainer>
    )
}

export default Zwaki
