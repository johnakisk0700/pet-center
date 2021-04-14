import { Button } from 'react-bootstrap'
const MarkesFilter = ({filterFood, setMarkesComp, isActive}) => {
    return (
        <div className='markes-filter' style={!isActive ? {transform: 'translateX(100%)'} : {}}>
            <h3 className='text-white m-3'>Μάρκες</h3>
            <div className='markes-wrapper'> 
                <div className="inputGroup">
                    <input id="option1" name="option1" type="checkbox" value='Flatazor Pro-Nutrition' onChange={filterFood} />
                    <label htmlFor="option1">Flatazor Pro-Nutrition</label>
                </div> 
                <div className='inputGroup'>
                    <input id="option2" name="option1" type="checkbox" value='ROYAL CANIN' onChange={filterFood} />
                    <label htmlFor="option2">ROYAL CANIN</label>
                </div>  
            </div>
            <Button variant='danger' onClick={() => setMarkesComp(false)}>Επιβεβαίωση</Button>
        </div>
    )
}

export default MarkesFilter
