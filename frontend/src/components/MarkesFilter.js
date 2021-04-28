import { Button } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import ClosingHandler from '../components/ClosingHandler'
const MarkesFilter = ({filterFood, products, markesFiltra}) => {
    const [ markes, setMarkes ] = useState([])
    const [ markesComp, setMarkesComp ] = useState(false)
    const markesRef = useRef(null)
    useEffect(() => {
        let brands = []
        products.forEach((product)=>{
        if(brands.indexOf(product.marka) === -1){
            brands.push(product.marka)
        }
        setMarkes([...brands])
    })
    }, [products])

    return (
        <div>
            <div className={markesFiltra.length > 0 ? 'markes-button active-filter' : 'markes-button'} onClick={() => setMarkesComp(true)} style={markesComp ? {transform: 'translateX(150%)'} : {}}>
                Μάρκες {markesFiltra.length > 0 ? <img src='/tick.svg'></img> : ''}
            </div>
                <CSSTransition
                in={markesComp}
                timeout={180}
                ref={markesRef}
                classNames='filtra-component'
                unmountOnExit
                >
                     <div className='invisi-wall' ref={markesRef}>
                    <ClosingHandler filterComp={setMarkesComp}>
                        <div className='markes-filter' >
                            <h3 className='text-white p-3'>Εταιρείες</h3>
                            <div className='markes-wrapper'> 
                                {markes !== undefined ? markes.map((marka, i) =>  
                                    <div className={markesFiltra.includes(marka) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} key={i} style={markesFiltra.includes(marka) ? {backgroundColor: '#011627'} : {}}>  
                                        <input id={`lel${i}`} name={`lel${i}`} type="checkbox" value={marka} onChange={filterFood} checked={markesFiltra.includes(marka)} className='dokimastiko-input'/>
                                        <label htmlFor={`lel${i}`} className='dokimastiko-label' style={markesFiltra.includes(marka) ? {color: 'white'} : {}}>{marka}</label>
                                        <div className='dokimastiko-after' style={markesFiltra.includes(marka) ? {backgroundColor: '#BE1E2D', borderColor: '#BE1E2D'} : {}} />
                                    </div>
                                ) : <></>}
                            </div>
                            <Button variant='danger' onClick={() => setMarkesComp(false)}>Επιβεβαίωση</Button>
                        </div>
                    </ClosingHandler>
                    </div>
                </CSSTransition>
        </div>
    )
}

export default MarkesFilter
