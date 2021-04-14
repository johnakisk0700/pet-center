import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const CatScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <Row className='justify-content-center'><h3>Γάτα</h3></Row>
            <Row className='justify-content-center'>Και μερικές μαλακίες για τη γάτα</Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/cat/cat-food.png' url={`${url}/trofes`} />
                <MenuRect title='Λιχουδιές' img='/menu-photos/cat/lixoudies.jpg' url={`${url}/lixoudies/proionta`} />
                <MenuRect title='Ονυχοδρόμια' img='/menu-photos/cat/onyxodromio.jpg' url={`${url}/onyxodromia/proionta`} />
                <MenuRect title='Παιχνίδια' img='/menu-photos/cat/paixnidia.jpg' url={`${url}/paixnidia/proionta`} />
                <MenuRect title='Μπωλ' img='/menu-photos/cat/mpwl.jpg' url={`${url}/mpwl/proionta`} />
                <MenuRect title='Λουριά' img='/menu-photos/cat/louria.jpg' url={`${url}/louria/proionta`} />
                <MenuRect title='Χτένες - Σαμπουάν' img='/menu-photos/cat/xtenesampouan.jpg' url={`${url}/xtenesampouan/proionta`} />
            </Row>
            
        </div>
    )
}

export default CatScreen
