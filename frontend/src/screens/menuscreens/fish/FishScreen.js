import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const FishScreen = () => {
    let { url } = useRouteMatch();

    return (
        <div>
            <Row className='justify-content-center'><h3>Ψάρι</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές - Βελτιωτικά Νερού' img='/menu-photos/fish/trofes.png' url={`${url}/trofes/proionta`} />
                <MenuRect title='Ενυδρεία' img='/menu-photos/fish/enydreia.jpg' url={`${url}/enydreia/proionta`} />
                <MenuRect title='Τέστ' img='/menu-photos/fish/test.png' url={`${url}/test/proionta`} />
                <MenuRect title='Διακοσμητικά' img='/menu-photos/fish/diakosmhtika.jpg' url={`${url}/diakosmhtika/proionta`} />
                <MenuRect title='Εξοπλισμός Ενυδρείου' img='/menu-photos/fish/eksoplismos.jpg' url={`${url}/eksoplismos/proionta`} />
            </Row>
            
        </div>
    )
}

export default FishScreen