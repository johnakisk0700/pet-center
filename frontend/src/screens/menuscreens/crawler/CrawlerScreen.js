import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const CrawlerScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <Row className='justify-content-center'><h3>Γάτα</h3></Row>
            <Row className='justify-content-center'>Και μερικές μαλακίες για τη γάτα</Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/crawler/crawler-food.png' url={`${url}/trofes`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/paixnidia`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/mpwl`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/louria`} />
                <MenuRect title='' img='/menu-photos/crawler/.jpg' url={`${url}/xtenesampouan`} />
            </Row>
            
        </div>
    )
}

export default CrawlerScreen