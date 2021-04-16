import { useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import Product from '../components/Product'
import Xarths from '../components/Xarths'
import axios from 'axios'
import BigLoader from '../components/BigLoader'
import MarkesFilter from '../components/MarkesFilter'
import MarkesFilterDesk from '../components/MarkesFilterDesk'
import ColorFilter from '../components/ColorFilter'
import ColorFilterDesk from '../components/ColorFilterDesk'
import Pagination from '../components/Pagination'
const ProductScreen = ({match}) => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ brandFilters, setBrandFilters ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ xarths, setXarths ] = useState({})
    const [ markesComp, setMarkesComp ] = useState(false)
    const [ colorFilterComp, setColorFilterComp ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ productsPerPage ] = useState(12)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1199px)' })
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1200px)'})
    //Pagination stuff
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    //Pagination
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
    //gia thn wra to brandFilters kanei kai gia ta 2, an xreiastoun parapanw apo 1 filtra prepei na grapsw ki allo!!!
    const filterByColor = (e) => {
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
            setFilteredProducts(products.filter(product => newChecked.some((r)=>product.colors.includes(r))))
        }
               
    }
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            await axios.get(`${process.env.REACT_APP_API_URL}api/products/${match.params.animal}/${match.params.category}/${match.params.subcategory ? match.params.subcategory : ''}`
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
                case 'travelcage':
                    map.category = 'Cage Μεταφοράς'
                break
                case 'terrarium':
                    map.category = 'Terrarium'
                break
                case 'symplhrwmata':
                    map.category = 'Συμπληρώματα Διατροφής'
                break
                case 'aksesouar':
                    map.category = 'Αξεσουάρ'
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
        ftiakseTaLinks()
        getProducts()}, [match])
    
    if(products.length > 0) {
        return (
        <>
            <Xarths match={match} xarths={xarths}/>
            {match.params.category === 'trofes' && <>
                    {isTabletOrMobile && <>
                        <div className='markes-button' onClick={() => setMarkesComp(true)} style={markesComp ? {transform: 'translateX(100%)'} : {}}>Μάρκες</div>
                        <MarkesFilter filterFood={filterFood} setMarkesComp={setMarkesComp} isActive={markesComp}/>
                    </>}
            </>}
            {match.params.category === 'louria' && <>
                    {isTabletOrMobile && <>
                        <div className='markes-button' onClick={() => setColorFilterComp(true)} style={colorFilterComp ? {transform: 'translateX(100%)'} : {}}>Χρώματα</div>
                        <ColorFilter filterByColor={filterByColor} setColorFilterComp={setColorFilterComp} isActive={colorFilterComp}/>
                    </>}
            </>}
            <Row className='d-flex justify-content-center mb-4 product-title'>
                    {match.params.subcategory !== undefined ? <h3>{xarths.animal} - {xarths.subcategory}</h3> : <h3>{xarths.animal} - {xarths.category}</h3>}
            </Row>
            <Container className={isDesktopOrLaptop & match.params.category === 'trofes' || isDesktopOrLaptop & match.params.category === 'louria'? 'products-container' : ''}>
                {match.params.category === 'trofes' & isDesktopOrLaptop ? 
                <>
                    <MarkesFilterDesk filterFood={filterFood} />
                </> : <></>}
                {match.params.category === 'louria' & isDesktopOrLaptop ? 
                <>
                    <ColorFilterDesk filterByColor={filterByColor} setColorFilterComp={setColorFilterComp} />
                </> : <></>}
                <Row xs={1} sm={2} md={3} lg={4} xl={match.params.category === 'trofes' || match.params.category === 'louria' ? 5 : 6}>
                    {currentProducts.map((product)=>{
                        return(
                            <Product match={match} product={product} key={product.pid}/>
                        )
                    })}
                    
                </Row>
                {filteredProducts.length > 12 && <Pagination filteredProducts={filteredProducts} productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
            </Container>
        </>
    )}
    else {
        return (
            <>
            <Xarths match={match} xarths={xarths}/>
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
