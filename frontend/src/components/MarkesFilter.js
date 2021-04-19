import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const MarkesFilter = ({filterFood, setMarkesComp, isActive, products, markesFiltra}) => {
    const [ markes, setMarkes ] = useState([])
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
        <div className='markes-filter' style={!isActive ? {transform: 'translateX(100%)'} : {}}>
            <h3 className='text-white m-3'>Μάρκες</h3>
            <div className='markes-wrapper'> 
                {markes !== undefined ? markes.map((marka, i) =>  
                    <div className={markesFiltra.includes(marka) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} key={i} style={markesFiltra.includes(marka) ? {backgroundColor: '#011627'} : {}}>  
                        <input id={`lel${i}`} name={`lel${i}`} type="checkbox" value={marka} onChange={filterFood} checked={markesFiltra.includes(marka)} className='dokimastiko-input'/>
                        <div className='dokimastiko-before' style={markesFiltra.includes(marka) ? {backgroundColor: '#011627', transform: 'translate(-50%, -50%) scale3d(11, 11, 1)', opacity: '1'} : {}} />
                        <label htmlFor={`lel${i}`} className='dokimastiko-label' style={markesFiltra.includes(marka) ? {color: 'white'} : {}}>{marka}</label>
                        <div className='dokimastiko-after' style={markesFiltra.includes(marka) ? {backgroundColor: '#BE1E2D', borderColor: '#011627'} : {}} />
                    </div>
                ) : <></>}
            </div>
            <Button variant='danger' onClick={() => setMarkesComp(false)}>Επιβεβαίωση</Button>
        </div>
    )
}

export default MarkesFilter
