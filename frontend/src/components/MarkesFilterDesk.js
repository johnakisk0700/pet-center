import { useEffect, useState } from 'react'
const MarkesFilterDesk = ({filterFood, products}) => {
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
                <div className="inputGroupDesk" key={i}>
                    <input id={`lel${i}`} name={`lel${i}`} type="checkbox" value={marka} onChange={filterFood} />
                    <label htmlFor={`lel${i}`}>{marka}</label>
                </div>
            ) : <></>}
        </div>
    </div>
    )
}

export default MarkesFilterDesk
