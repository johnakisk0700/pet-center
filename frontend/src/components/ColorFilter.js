import { Button } from 'react-bootstrap'
import { xrwmata } from './layout/translate'
const ColorFilter = ({filterByColor, setColorFilterComp, isActive, xrwmataFiltra}) => {
    function capFirst(x) {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }
    const tickColorSwap = `url("data:image/svg+xml,%3Csvg width='1.5rem' height='1.5rem' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='black' fill-rule='nonzero'/%3E%3C/svg%3E")`
    return (
    <div className='markes-filter' style={!isActive ? {transform: 'translateX(100%)'} : {}}>
            <h3 className='text-white m-3'>Χρώματα</h3>
        <div className='markes-wrapper'> 
            {Object.entries(xrwmata).map(([key, val], i) => (
                    <div className={xrwmataFiltra.includes(key) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`} : {}}>
                        <input id={`xrwma${i}`} name={`xrwma${i}`} type="checkbox" value={key} onChange={filterByColor} checked={xrwmataFiltra.includes(key)} className='dokimastiko-input'/>
                        <div className='dokimastiko-before' style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`, transform: 'translate(-50%, -50%) scale3d(11, 11, 1)', opacity: '1'} : {}} />
                        <label htmlFor={`xrwma${i}`} className='dokimastiko-label' style={xrwmataFiltra.includes(key) ? key === 'white' || key ==='yellow' || key === 'lime' ? {color: 'black'} : {color: 'white'}: {}}>{val}</label>
                        <div className='dokimastiko-after' style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`, borderColor: `${key}`, backgroundImage: `${key === 'white' || key === 'yellow' || key === 'lime' ? tickColorSwap : ''}`} : {}} />
                    </div>
                ))}
        </div>
        <Button variant='danger' onClick={() => setColorFilterComp(false)}>Επιβεβαίωση</Button>
    </div>
    )
}

export default ColorFilter
