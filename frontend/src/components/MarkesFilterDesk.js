const MarkesFilterDesk = ({filterFood}) => {
    return (
    <div className='markes-filter-desk'>
        <h3 className='text-white m-3'>Μάρκες</h3>
        <div className='markes-wrapper-desk'> 
            <div className="inputGroupDesk">
                <input id="option1" name="option1" type="checkbox" value='Flatazor Pro-Nutrition' onChange={filterFood} />
                <label htmlFor="option1">Flatazor Pro-Nutrition</label>
            </div> 
            <div className='inputGroupDesk'>
                <input id="option2" name="option1" type="checkbox" value='ROYAL CANIN' onChange={filterFood} />
                <label htmlFor="option2">ROYAL CANIN</label>
            </div>  
        </div>
    </div>
    )
}

export default MarkesFilterDesk
