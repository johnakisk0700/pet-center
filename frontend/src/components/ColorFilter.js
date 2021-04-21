import { Button } from 'react-bootstrap'
import { xrwmata } from './layout/translate'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import ClosingHandler from '../components/ClosingHandler'
const ColorFilter = ({filterByColor, xrwmataFiltra}) => {
    const [ colorsComp, setColorsComp ] = useState(false)
    const colorsRef = useRef(null)
    function capFirst(x) {
        return x.charAt(0).toUpperCase() + x.slice(1);
    }
    const tickColorSwap = `url("data:image/svg+xml,%3Csvg width='1.5rem' height='1.5rem' viewBox='0 0 1rem 1rem' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='black' fill-rule='nonzero'/%3E%3C/svg%3E")`
    return (
    <div>
        <div className={xrwmataFiltra.length > 0 ? 'markes-button active-filter' : 'markes-button'} onClick={() => setColorsComp(true)} style={colorsComp ? {transform: 'translateX(150%)'} : {}}>
                Χρώματα {xrwmataFiltra.length > 0 ? <img src='/tick.svg'></img> : ''}
        </div>
        <CSSTransition
                in={colorsComp}
                timeout={180}
                ref={colorsRef}
                classNames='filtra-component'
                unmountOnExit
                >    
                <div className='invisi-wall' ref={colorsRef}>   
                    <ClosingHandler filterComp={setColorsComp}>
                        <div className='markes-filter'>
                                <h3 className='text-white p-3'>Χρώματα</h3>
                            <div className='markes-wrapper'> 
                                {Object.entries(xrwmata).map(([key, val], i) => (
                                        <div className={xrwmataFiltra.includes(key) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`} : {}}>
                                            <input id={`xrwma${i}`} name={`xrwma${i}`} type="checkbox" value={key} onChange={filterByColor} checked={xrwmataFiltra.includes(key)} className='dokimastiko-input'/>
                                            <label htmlFor={`xrwma${i}`} className='dokimastiko-label' style={xrwmataFiltra.includes(key) ? key === 'white' || key ==='yellow' || key === 'lime' ? {color: 'black'} : {color: 'white'}: {}}>{val}</label>
                                            <div className='dokimastiko-after' style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`, borderColor: `${key}`, backgroundImage: `${key === 'white' || key === 'yellow' || key === 'lime' ? tickColorSwap : ''}`} : {}} />
                                        </div>
                                    ))}
                            </div>
                            <Button variant='danger' onClick={() => setColorsComp(false)}>Επιβεβαίωση</Button>
                        </div>
                    </ClosingHandler>
                </div>    
        </CSSTransition>
    </div>
    )
}

export default ColorFilter
