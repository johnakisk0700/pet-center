import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const DogScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <Row className='justify-content-center'><h3>Σκύλος</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/dog/dog-food.jpg' url={`${url}/trofes`} />
                <MenuRect title='Λιχουδιές' img='/menu-photos/dog/lixoudies.jpg' url={`${url}/lixoudies/proionta`} />
                <MenuRect title='Κόκκαλα' img='/menu-photos/dog/kokkala.jpg' url={`${url}/kokkala/proionta`} />
                <MenuRect title='Παιχνίδια' img='/menu-photos/dog/paixnidia.jpg' url={`${url}/paixnidia/proionta`} />
                <MenuRect title='Μπωλ' img='/menu-photos/cat/mpwl.jpg' url={`${url}/mpwl/proionta`} />
                <MenuRect title='Λουριά' img='/menu-photos/dog/louria.jpg' url={`${url}/louria/proionta`} />
                <MenuRect title='Cage Μεταφοράς' img='/menu-photos/cat/travelcage.jpg' url={`${url}/travelcage/proionta`} />
                <MenuRect title='Κρεβάτια' img='/menu-photos/dog/krevati.jpg' url={`${url}/krevatia/proionta`} />
                <MenuRect title='Χτένες - Σαμπουάν' img='/menu-photos/cat/xtenesampouan.jpg' url={`${url}/xtenesampouan/proionta`} />
            </Row>
            
        </div>
    )
}

export default DogScreen