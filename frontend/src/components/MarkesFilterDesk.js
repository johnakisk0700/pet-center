import { useEffect, useState } from 'react'
const MarkesFilterDesk = ({filterFood, products, markesFiltra}) => {
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
        <div className='markes-filter-desk'>
        <h3 className='text-white m-3'>Μάρκες</h3>
        <div className='markes-wrapper-desk'> 
            {markes !== undefined ? markes.map((marka, i) =>  
                <div className={markesFiltra.includes(marka) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} key={i} style={markesFiltra.includes(marka) ? {backgroundColor: '#011627'} : {}} >  
                    <input id={`lel${i}`} name={`lel${i}`} type="checkbox" value={marka} onChange={filterFood} checked={markesFiltra.includes(marka)} className='dokimastiko-input'/>
                    <label htmlFor={`lel${i}`} className='dokimastiko-label' style={markesFiltra.includes(marka) ? {color: 'white'} : {}}>{marka}</label>
                    <div className='dokimastiko-after' style={markesFiltra.includes(marka) ? {backgroundColor: '#BE1E2D', borderColor: '#BE1E2D'} : {}} />
                </div>
            ) : <></>}
        </div>
    </div>
    )
}

export default MarkesFilterDesk
