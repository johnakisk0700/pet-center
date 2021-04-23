import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const BirbScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <Row className='justify-content-center'><h3>Πτηνά</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/birb/birb-food.jpg' url={`${url}/trofes/proionta`} />
                <MenuRect title='Κλουβιά' img='/menu-photos/birb/klouvia.jpg' url={`${url}/klouvia/proionta`} />
                <MenuRect title='Ταίστρες' img='/menu-photos/birb/taistres.jpg' url={`${url}/taistres/proionta`} />
                <MenuRect title='Ποτίστρες' img='/menu-photos/birb/potistres.jpg' url={`${url}/potistres/proionta`} />
                <MenuRect title='Πατήθρες' img='/menu-photos/birb/patithres.jpg' url={`${url}/patithres/proionta`} />
                <MenuRect title='Πάτοι Κλουβιών' img='/menu-photos/birb/patoi.jpg' url={`${url}/patoi/proionta`} />
                <MenuRect title='Είδη Ζευγαρώματος' img='/menu-photos/birb/zevgarwma.jpg' url={`${url}/zevgarwma/proionta`} />
                <MenuRect title='Παιχνίδια' img='/menu-photos/birb/paixnidia.jpg' url={`${url}/paixnidia/proionta`} />
                <MenuRect title='Αξεσουάρ' img='/menu-photos/birb/aksesouar.jpg' url={`${url}/aksesouar/proionta`} />
            </Row>
            
        </div>
    )
}

export default BirbScreen