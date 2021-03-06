import Zwaki from './layout/zwaki';
import { Container, Row, Col } from 'react-bootstrap';
import Decor from './layout/menu/svg-icons/decor-01.svg';

const Zwakia = () => {
    return (
        <Container className='d-flex flex-column zwakia'>
            <Row className='justify-content-center'>
                <Col className='decor-img-wrapper text-right my-auto d-none d-md-block'>
                    <img  src={Decor} alt='' />
                </Col>
                <Col sm='auto' className='erwthsh-text py-1'>
                    Τι κατοικίδιο έχετε;
                </Col>
                <Col className='decor-img-wrapper center-block my-auto d-none d-md-block'>
                    <img  src={Decor} style={{transform: "scaleX(-1)"}} alt='' />
                </Col>  
            </Row>
            <Row className='justify-content-center' md={4} lg={4} xl={5} sm={3} xs={1}>  
                <Zwaki title='Γατα' img='/photos-cropped/gatos.png' url='/gata'/>
                <Zwaki title='Σκυλος' img='/photos-cropped/skylos.png' url='/skylos'/>
                <Zwaki title='Πτηνο' img='/photos-cropped/birb.png' url='/pthno'/>
                <Zwaki title='Ψαρι' img='/photos-cropped/psari.png' url='/psari'/>
                <Zwaki title='Τρωκτικο' img='/photos-cropped/kouneli.png' url='/trwktiko'/>
                <Zwaki title='Ερπετο' img='/photos-cropped/erpeto.png' url='/erpeto' diorthwsh={{right: '-30%', top: '20%'}}/>
            </Row>  
        </Container>
    )
}

export default Zwakia
