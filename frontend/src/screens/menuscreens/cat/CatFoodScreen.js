import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';

const CatFoodScreen = () => {
    return (
        <div>
            <Row className='justify-content-center'><h3>Γατοτροφές</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Ξηρά Τροφή' img='/menu-photos/cat/cat-food.jpg' url='/gata/trofes/kshra/proionta' />
                <MenuRect title='Υγρή τροφή' img='/menu-photos/cat/cat-wet-food.jpg' url='/gata/trofes/ygrh/proionta' />
                <MenuRect title='Κλινικές Δίαιτες' img='/menu-photos/cat/klinikes.jpg' url='/gata/trofes/klinikes/proionta' />
            </Row>
        </div>
    )
}

export default CatFoodScreen
