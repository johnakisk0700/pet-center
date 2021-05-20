import axios from 'axios'
import { useState, useEffect } from 'react'
import Xarths from '../components/Xarths'
import ProductExpanded from '../components/ProductExpanded'
import BigLoader from '../components/BigLoader'


const ProductScreen = ({ match }) => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            await axios.get(`${process.env.REACT_APP_API_URL}api/product/${match.params.id}`)
            .then(res => {
                const product = res.data
                setProduct(product)
                setLoading(false)
            })
            .catch(err => 
                console.log(err)   
            )
        }
        getProduct()
    }, [match])    

    if(Object.keys(product).length > 0){
        return (
            <>
                <Xarths match={match} xarths={product} />
                <ProductExpanded product={product} />
            </>
        )
    }else {
        return(
            <>
            {loading === true && <>
                <Xarths match={match} xarths={product} />
                <BigLoader /> 
            </>}
            {loading === false && <> 
                <Xarths match={match} xarths={product} />
                <div>Συγνώμη, το προιόν που ζητήσατε δεν υπάρχει.</div>
            </>}
                
            </>
        )
    }
}

export default ProductScreen
