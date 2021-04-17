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
import {zwa, kathgories, ypokathgories} from '../components/layout/translate'
const ProductScreen = ({match}) => {
    const [ products, setProducts ] = useState([])
    const [ filteredProducts, setFilteredProducts ] = useState([])
    const [ brandFilters, setBrandFilters ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ markesComp, setMarkesComp ] = useState(false)
    const [ colorFilterComp, setColorFilterComp ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ productsPerPage ] = useState(12)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1199px)' })
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1200px)'})
    const params = match.params
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
            await axios.get(`${process.env.REACT_APP_API_URL}api/products/${params.animal}/${params.category}/${params.subcategory ? params.subcategory : ''}`
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
        getProducts()
        setCurrentPage(1)
    }, [params])
    
    if(products.length > 0) {
        return (
        <>
            <Xarths match={match} />
            
            {params.category === 'trofes' && <>
                    {isTabletOrMobile && <>
                        <div className='markes-button' onClick={() => setMarkesComp(true)} style={markesComp ? {transform: 'translateX(100%)'} : {}}>Μάρκες</div>
                        <MarkesFilter filterFood={filterFood} products={products} setMarkesComp={setMarkesComp} isActive={markesComp}/>
                    </>}
            </>}
            
            {params.category === 'louria' && <>
                    {isTabletOrMobile && <>
                        <div className='markes-button' onClick={() => setColorFilterComp(true)} style={colorFilterComp ? {transform: 'translateX(100%)'} : {}}>Χρώματα</div>
                        <ColorFilter filterByColor={filterByColor} setColorFilterComp={setColorFilterComp} isActive={colorFilterComp}/>
                    </>}
            </>}
            
            <Row className='d-flex justify-content-center mb-4 product-title'>
                    {params.subcategory !== undefined ? <h3>{zwa[params.animal]} - {ypokathgories[params.subcategory]}</h3> : <h3>{zwa[params.animal]} - {kathgories[params.category]}</h3>}
            </Row>
            
            
            <Container className={isDesktopOrLaptop & params.category === 'trofes' || isDesktopOrLaptop & params.category === 'louria'? 'products-container' : ''}>
                
                {params.category === 'trofes' & isDesktopOrLaptop ? 
                <>
                    <MarkesFilterDesk filterFood={filterFood} products={products} />
                </> : <></>}
                
                
                {params.category === 'louria' & isDesktopOrLaptop ? 
                <>
                    <ColorFilterDesk filterByColor={filterByColor} setColorFilterComp={setColorFilterComp} />
                </> : <></>}
                
                
                <Row xs={1} sm={2} md={3} lg={4} xl={params.category === 'trofes' || params.category === 'louria' ? 5 : 6} style={{minHeight: '65vh'}} >
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
            <Xarths match={match}/>
            <Container>
                <Row className='d-flex justify-content-center mb-4 product-title'>
                    {params.subcategory !== undefined ? <h3>{zwa[params.animal]} - {ypokathgories[params.subcategory]}</h3> : <h3>{zwa[params.animal]} - {kathgories[params.category]}</h3>}
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
