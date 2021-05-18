import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const CrawlerScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div className='actual-screen'>
            <Row className='justify-content-center'><h3>Ερπετό</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/crawler/crawler-food.jpg' url={`${url}/trofes/proionta`} />
                <MenuRect title='Terrarium' img='/menu-photos/crawler/terrarium.jpg' url={`${url}/terrarium/proionta`} />
                <MenuRect title='Συμπληρώματα Διατροφής' img='/menu-photos/crawler/symplhrwmata.jpg' url={`${url}/symplhrwmata/proionta`} />
                <MenuRect title='Αξεσουάρ' img='/menu-photos/crawler/diakosmhtika.jpg' url={`${url}/aksesouar/proionta`} />
            </Row>
            
        </div>
    )
}

export default CrawlerScreen