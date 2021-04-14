import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const FishScreen = () => {
    let { url } = useRouteMatch();

    return (
        <div>
            <Row className='justify-content-center'><h3>Ψάρι</h3></Row>
            <Row className='justify-content-center'>Και μερικές μαλακίες για το ψάρι</Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/fish/fish-food.jpg' url={`${url}/trofes/proionta`} />
                <MenuRect title='Ενυδρεία' img='/menu-photos/fish/enydreia.jpg' url={`${url}/enydreia/proionta`} />
                <MenuRect title='Διακοσμητικά' img='/menu-photos/fish/diakosmhtika.jpg' url={`${url}/diakosmhtika/proionta`} />
                <MenuRect title='Εξοπλισμός Ενυδρείου' img='/menu-photos/fish/eksoplismos.jpg' url={`${url}/eksoplismos/proionta`} />
            </Row>
            
        </div>
    )
}

export default FishScreen