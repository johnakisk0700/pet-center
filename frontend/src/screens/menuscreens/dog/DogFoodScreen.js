import MenuRect from '../../../components/layout/MenuRect';
import { Row } from 'react-bootstrap';

const DogFoodScreen = () => {
    return (
        <div>
            <Row className='justify-content-center'><h3>Σκύλος</h3></Row>
            <Row className='justify-content-center'>Και μερικές μαλακίες για τον σκύλο</Row>
            <Row className='justify-content-center my-4'>
                <MenuRect title='Ξηρά Τροφή' img='/menu-photos/dog/dog-food.jpg' url='/skylos/trofes/kshra/proionta' />
                <MenuRect title='Υγρή τροφή' img='/menu-photos/dog/dog-food-wet.jpg' url='/skylos/trofes/ygrh/proionta' />
            </Row>
        </div>
    )
}

export default DogFoodScreen
