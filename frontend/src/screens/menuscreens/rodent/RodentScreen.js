import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const RodentScreen = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <Row className='justify-content-center'><h3>Τρωκτικά</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Τροφές' img='/menu-photos/rodent/rodent-food.jpg' url={`${url}/trofes/proionta`} />
                <MenuRect title='Μπωλ' img='/menu-photos/cat/mpwl.jpg' url={`${url}/mpwl/proionta`} />
                <MenuRect title='Κλουβιά' img='/menu-photos/rodent/klouvia.jpg' url={`${url}/klouvia/proionta`} />
                <MenuRect title='Υποστρώματα' img='/menu-photos/rodent/ypostrwmata.jpg' url={`${url}/ypostrwmata/proionta`} />
                <MenuRect title='Αξεσουάρ' img='/menu-photos/rodent/aksesouar.jpg' url={`${url}/aksesouar/proionta`} />
                <MenuRect title='Είδη Υγιεινής' img='/menu-photos/rodent/ygeia.jpg' url={`${url}/ygeia/proionta`} />
            </Row>
            
        </div>
    )
}

export default RodentScreen
