import { xrwmata } from './layout/translate'
const ColorFilterDesk = ({filterByColor, xrwmataFiltra}) => {
    const tickColorSwap = `url("data:image/svg+xml,%3Csvg width='1.5rem' height='1.5rem' viewBox='0 0 1rem 1rem' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='black' fill-rule='nonzero'/%3E%3C/svg%3E")`
    return (
        <div className='markes-filter-desk'>
            <h3 className='text-white m-3'>Χρώματα</h3>
            <div className='markes-wrapper-desk'> 
            {Object.entries(xrwmata).map(([key, val], i) => (
                    <div className={xrwmataFiltra.includes(key) ? 'dokimastikoGroup-selected' : 'dokimastikoGroup'} style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`} : {}}>
                        <input id={`xrwma${i}`} name={`xrwma${i}`} type="checkbox" value={key} onChange={filterByColor} checked={xrwmataFiltra.includes(key)} className='dokimastiko-input'/>
                        <label htmlFor={`xrwma${i}`} className='dokimastiko-label' style={xrwmataFiltra.includes(key) ? key === 'white' || key ==='yellow' || key === 'lime' ? {color: 'black'} : {color: 'white'}: {}}>{val}</label>
                        <div className='dokimastiko-after' style={xrwmataFiltra.includes(key) ? {backgroundColor: `${key}`, borderColor: `${key}`, backgroundImage: `${key === 'white' || key === 'yellow' || key === 'lime' ? tickColorSwap : ''}`} : {}} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorFilterDesk
