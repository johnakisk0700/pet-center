import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const CatScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div className='actual-screen'>
            <Row className='justify-content-center'><h3>Γάτα</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/cat/cat-food.jpg' url={`${url}/trofes`} />
                <MenuRect title='Λιχουδιές' img='/menu-photos/cat/lixoudies.jpg' url={`${url}/lixoudies/proionta`} />
                <MenuRect title='Ονυχοδρόμια' img='/menu-photos/cat/onyxodromio.jpg' url={`${url}/onyxodromia/proionta`} />
                <MenuRect title='Παιχνίδια' img='/menu-photos/cat/paixnidia.jpg' url={`${url}/paixnidia/proionta`} />
                <MenuRect title='Μπωλ' img='/menu-photos/cat/mpwl.jpg' url={`${url}/mpwl/proionta`} />
                <MenuRect title='Λουριά' img='/menu-photos/cat/louria.jpg' url={`${url}/louria/proionta`} />
                <MenuRect title='Κρεβάτια' img='/menu-photos/cat/krevati.jpg' url={`${url}/krevatia/proionta`} />
                <MenuRect title='Λεκάνες' img='/menu-photos/cat/lekanes.jpg' url={`${url}/lekanes/proionta`} />
                <MenuRect title='Cage Μεταφοράς' img='/menu-photos/cat/travelcage.jpg' url={`${url}/travelcage/proionta`} />
                <MenuRect title='Χτένες - Σαμπουάν' img='/menu-photos/cat/xtenesampouan.jpg' url={`${url}/xtenesampouan/proionta`} />
                <MenuRect title='Συμπληρώματα Διατροφής' img='/menu-photos/cat/symplhrwmata.jpg' url={`${url}/symplhrwmata/proionta`} />
                <MenuRect title='Είδη Υγιεινής' img='/menu-photos/cat/ygeia.jpg' url={`${url}/ygeia/proionta`} />
            </Row>
            
        </div>
    )
}

export default CatScreen
