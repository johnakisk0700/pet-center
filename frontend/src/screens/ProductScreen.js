import axios from 'axios'
import { useState, useEffect } from 'react'
import Xarths from '../components/Xarths'
import ProductExpanded from '../components/ProductExpanded'
import BigLoader from '../components/BigLoader'
const ProductScreen = ({match}) => {
    const [ product, setProduct ] = useState(null)
    const [ xarths, setXarths ] = useState({})
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
        getProduct()
        ftiakseTaLinks()
    }, [match])    

    if(product !== null){
        return (
            <>
                <Xarths match={match} xarths={xarths} />
                <ProductExpanded product={product} />
            </>
        )
    }else {
        return(
            <>
            {loading === true && <>
                <Xarths match={match} xarths={xarths} />
                <BigLoader /> 
            </>}
            {loading === false && <> 
                <Xarths match={match} xarths={xarths} />
                <div>Συγνώμη, το προιόν που ζητήσατε δεν υπάρχει.</div>
            </>}
                
            </>
        )
    }
}

export default ProductScreen
