import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
const Xarths = ({match, xarths}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
    <Container>
        <div className='xarths'>
            <div className='xarths-wrapper'>
                <Link to='/'>Αρχική</Link>
                <div className='velaki'>{'/'}</div>
                <Link to={`/${match.params.animal}`}>{xarths.animal}</Link>
                
                {match.params.id !== undefined ? <> 
                        {match.params.subcategory !== undefined ? <>
                        <div className='velaki'>{'/'}</div>
                        {!isTabletOrMobile && <Link to={`/${match.params.animal}/${match.params.category}`}>{xarths.category}</Link>}
                        
                        {!isTabletOrMobile && <> <div className='velaki'>{'/'}</div> <Link to={`/${match.params.animal}/${match.params.category}/${match.params.subcategory}/proionta`}>{xarths.subcategory}</Link></>}
                    </> 
                    :<>
                        {!isTabletOrMobile && <>
                            <div className='velaki'>{'/'}</div>
                            <Link to={`/${match.params.animal}/${match.params.category}/proionta`}>{xarths.category}</Link>
                            
                            </>}
                    </>}
                </>:<>
                    {match.params.subcategory !== undefined ? <>
                        {!isTabletOrMobile && <> 
                            <div className='velaki'>{'/'}</div>
                            <Link to={`/${match.params.animal}/${match.params.category}`}>{xarths.category}</Link>
                            <div className='velaki'>{'/'}</div> <a>{xarths.subcategory}</a>
                        </>}
                    </> 
                    :<>
                        {!isTabletOrMobile && <>
                            <div className='velaki'>{'/'}</div>
                            <a>{xarths.category}</a>
                            
                            </>}
                </>}</>}
            </div>
            
        </div>
    </Container>
    )
}

export default Xarths
