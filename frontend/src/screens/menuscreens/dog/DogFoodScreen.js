import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';

const DogFoodScreen = () => {
    return (
        <div>
            <Row className='justify-content-center'><h3>Σκύλος</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Ξηρά Τροφή' img='/menu-photos/dog/dog-food.jpeg' url='/skylos/trofes/kshra/proionta' />
                <MenuRect title='Υγρή τροφή' img='/menu-photos/dog/dog-food-wet.jpeg' url='/skylos/trofes/ygrh/proionta' />
                <MenuRect title='Κλινικές Δίαιτες' img='/menu-photos/dog/sterilized.jpeg' url='/gata/trofes/klinikes/proionta' />
            </Row>
        </div>
    )
}

export default DogFoodScreen
