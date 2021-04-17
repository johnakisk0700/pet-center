import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import {zwa, kathgories, ypokathgories} from './layout/translate'
const Xarths = ({match}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' })
    const params = match.params
    return (
    <Container>
        <div className='xarths'>
            <div className='xarths-wrapper'>
                <Link to='/'>Αρχική</Link>
                <div className='velaki'>{'/'}</div>
                <Link to={`/${params.animal}`}>{zwa[params.animal]}</Link>
                
                {params.id !== undefined ? <> 
                        {params.subcategory !== undefined ? <>

                        {!isTabletOrMobile && <> <div className='velaki'>{'/'}</div> <Link to={`/${params.animal}/${params.category}`}>{kathgories[params.category]}</Link> </>}
                        
                        {!isTabletOrMobile && <> <div className='velaki'>{'/'}</div> <Link to={`/${params.animal}/${params.category}/${params.subcategory}/proionta`}>{ypokathgories[params.subcategory]}</Link></>}
                    </> 
                    :<>
                        {!isTabletOrMobile && <>
                            <div className='velaki'>{'/'}</div>
                            <Link to={`/${params.animal}/${params.category}/proionta`}>{kathgories[params.category]}</Link>
                            
                            </>}
                    </>}
                </>:<>
                    {params.subcategory !== undefined ? <>
                        {!isTabletOrMobile && <> 
                            <div className='velaki'>{'/'}</div>
                            <Link to={`/${params.animal}/${params.category}`}>{kathgories[params.category]}</Link>
                            <div className='velaki'>{'/'}</div> <a>{ypokathgories[params.subcategory]}</a>
                        </>}
                    </> 
                    :<>
                        {!isTabletOrMobile && <>
                            <div className='velaki'>{'/'}</div>
                            <a>{kathgories[params.category]}</a>
                            
                            </>}
                </>}</>}
            </div>
            
        </div>
    </Container>
    )
}

export default Xarths
