import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const MarkesFilter = ({filterFood, setMarkesComp, isActive, products}) => {
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
                    <div className="inputGroupDesk" key={i}>
                        <input id={`lel${i}`} name={`lel${i}`} type="checkbox" value={marka} onChange={filterFood} />
                        <label htmlFor={`lel${i}`}>{marka}</label>
                    </div>
                ) : <></>}
            </div>
            <Button variant='danger' onClick={() => setMarkesComp(false)}>Επιβεβαίωση</Button>
        </div>
    )
}

export default MarkesFilter
