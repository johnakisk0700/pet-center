import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';

const DogFoodScreen = () => {
    return (
        <div className='actual-screen'>
            <Row className='justify-content-center'><h3>Σκύλος</h3></Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Ξηρά Τροφή' img='/menu-photos/dog/dog-food.jpg' url='/skylos/trofes/kshra/proionta' />
                <MenuRect title='Υγρή τροφή' img='/menu-photos/dog/dog-food-wet.jpg' url='/skylos/trofes/ygrh/proionta' />
                <MenuRect title='Κλινικές Δίαιτες' img='/menu-photos/dog/klinikes.png' url='/skylos/trofes/klinikes/proionta' />
            </Row>
        </div>
    )
}

export default DogFoodScreen
