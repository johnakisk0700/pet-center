import { useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Xarths from '../components/Xarths'
import axios from 'axios'
import BigLoader from '../components/BigLoader'
import MarkesFilter from '../components/MarkesFilter'
const ProductScreen = ({match}) => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ brandFilters, setBrandFilters ] = useState([])
    const [ xarths, setXarths ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ markesComp, setMarkesComp ] = useState(false)
    const filterFood = (e) => {
        const currentIndex = brandFilters.indexOf(e.target.value)
        const newChecked = [...brandFilters]
        if(currentIndex === -1){
            newChecked.push(e.target.value)
        }
        else{
            newChecked.splice(currentIndex, 1)
        }
        setBrandFilters(newChecked)
        if(newChecked.length === 0){
            setFilteredProducts(products)
        }else{
            setFilteredProducts(products.filter(product => newChecked.includes(product.marka)))
        }
               
    }
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            await axios.get(`http://localhost:5000/api/products/${match.params.animal}/${match.params.category}/${match.params.subcategory ? match.params.subcategory : ''}`
            ).then(res => {
                const producterinos = res.data
                setProducts([...producterinos])
                setFilteredProducts([...producterinos])
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
        }
        const ftiakseTaLinks = () => {
            const map = {...match.params}
            switch(map.animal){
                case "gata":
                    map.animal = 'Γάτα'
                break
                case 'skylos':
                    map.animal = 'Σκύλος'
                break
                case 'pthno':
                    map.animal = 'Πτηνό'
                break
                case 'psari':
                    map.animal = 'Ψάρι'
                break
                case 'trwktiko':
                    map.animal = 'Τρωκτικό'
                break
                case 'erpeto':
                    map.animal = 'Ερπετό'
                break
            }
            switch(map.category) {
                case 'trofes':
                    map.category = 'Τροφές'
                break
                case 'lixoudies':
                    map.category = 'Λιχουδιές'
                break
                case 'onyxodromia':
                    map.category = 'Ονυχοδρόμια'
                break
                case 'paixnidia':
                    map.category = 'Παιχνίδια'
                break
                case 'mpwl':
                    map.category = 'Μπωλ'
                break
                case 'louria':
                    map.category = 'Λουριά'
                break
                case 'xtenesampouan':
                    map.category = 'Χτένες - Σαμπουάν'
                break
                case 'kokkala':
                    map.category = 'Κόκκαλα'
                break
                case 'klouvia':
                    map.category = 'Κλουβιά'
                break
                case 'taistres':
                    map.category = 'Ταίστρες'
                break
                case 'potistres':
                    map.category = 'Ποτίστρες'
                break
                case 'patithres':
                    map.category = 'Πατήθρες'
                break
                case 'patoi':
                    map.category = 'Πάτοι'
                break
                case 'zevgarwma':
                    map.category = 'Είδη Ζευγαρώματος'
                break
                case 'enydreia':
                    map.category = 'Ενυδρεία'
                break
                case 'diakosmhtika':
                    map.category = 'Διακοσμητικά Ενυδρείου'
                break
                case 'eksoplismos':
                    map.category = 'Εξοπλισμός'
                break
                case 'ypostrwmata':
                    map.category = 'Υποστρώματα'
                break
                case 'ygeia':
                    map.category = 'Είδη Υγιεινής'
                break
            }
            switch(map.subcategory){
                case 'kshra':
                    map.subcategory = 'Ξηρά Τροφή'
                break
                case 'ygrh':
                    map.subcategory = 'Υγρή Τροφή'
                break
            }
            setXarths(map)
        }
        getProducts()
        ftiakseTaLinks()}, [match])
    
    if(products.length > 0) {
        return (
        <>
            <Xarths match={match} xarths={xarths} />
            {match.params.category === 'trofes' && <>
                    <div className='markes-button' onClick={() => setMarkesComp(true)} style={markesComp ? {transform: 'translateX(100%)'} : {}}>Μάρκες</div>
                    <MarkesFilter filterFood={filterFood} setMarkesComp={setMarkesComp} isActive={markesComp}/>
            </>}
            <Container >
                <Row className='d-flex justify-content-center mb-4 product-title'>
                    {match.params.subcategory !== undefined ? <h3>{xarths.animal} - {xarths.subcategory}</h3> : <h3>{xarths.animal} - {xarths.category}</h3>}
                </Row>
                <Row xs={1} sm={2} md={3} lg={5}>
                    {filteredProducts.map((product)=>{
                        return(
                            <Product match={match} product={product} key={product.pid}/>
                        )
                    })}
                </Row>
            </Container>
        </>
    )}
    else {
        return (
            <>
            <Xarths match={match} xarths={xarths} />
            <Container>
                <Row className='d-flex justify-content-center mb-4 product-title'>
                    {match.params.subcategory !== undefined ? <h3>{xarths.animal} - {xarths.subcategory}</h3> : <h3>{xarths.animal} - {xarths.category}</h3>}
                </Row>
                {loading === true && <BigLoader />}
                {loading === false && <>
                    <div className='d-flex justify-content-center m-5'>
                        Δεν υπάρχουν προιόντα σε αυτή τη κατηγορία.
                    </div>
                </>}
            </Container>    
            </>
        )}
}

export default ProductScreen
