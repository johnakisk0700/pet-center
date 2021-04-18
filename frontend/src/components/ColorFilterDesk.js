const ColorFilterDesk = ({filterByColor, xrwmataFiltra}) => {
    return (
        <div className='markes-filter-desk'>
            <h3 className='text-white m-3'>Χρώματα</h3>
        <div className='markes-wrapper-desk'> 
        <div className='inputGroupDeskBlack'>
                <input id="option2" name="option1" type="checkbox" value='black' onChange={filterByColor} checked={xrwmataFiltra.includes('black')}/>
                <label htmlFor="option2">Μαύρο</label>
            </div>  
            <div className="inputGroupDeskRed">
                <input id="option1" name="option1" type="checkbox" value='red' onChange={filterByColor} checked={xrwmataFiltra.includes('red')}/>
                <label htmlFor="option1">Κόκκινο</label>
            </div>
            <div className="inputGroupDeskBlue">
                <input id="option3" name="option3" type="checkbox" value='blue' onChange={filterByColor} checked={xrwmataFiltra.includes('blue')}/>
                <label htmlFor="option3">Μπλέ</label>
            </div>
            <div className="inputGroupDeskLGreen">
                <input id="option4" name="option4" type="checkbox" value='lightgreen' onChange={filterByColor} checked={xrwmataFiltra.includes('lightgreen')}/>
                <label htmlFor="option4">Λαχανί</label>
            </div>
            <div className="inputGroupDeskTeal">
                <input id="option5" name="option5" type="checkbox" value='teal' onChange={filterByColor} checked={xrwmataFiltra.includes('teal')}/>
                <label htmlFor="option5">Γαλαζοπράσινο</label>
            </div>
            <div className="inputGroupDeskPurple">
                <input id="option6" name="option6" type="checkbox" value='purple' onChange={filterByColor} checked={xrwmataFiltra.includes('purple')}/>
                <label htmlFor="option6">Μωβ</label>
            </div>
            <div className="inputGroupDeskOrange">
                <input id="option7" name="option7" type="checkbox" value='orange' onChange={filterByColor} checked={xrwmataFiltra.includes('orange')}/>
                <label htmlFor="option7">Πορτοκαλί</label>
            </div>
            <div className="inputGroupDeskViolet">
                <input id="option8" name="option8" type="checkbox" value='violet' onChange={filterByColor} checked={xrwmataFiltra.includes('violet')}/>
                <label htmlFor="option8">Βιολετί</label>
            </div> 
            <div className="inputGroupDeskGray">
                <input id="option9" name="option9" type="checkbox" value='grey' onChange={filterByColor} checked={xrwmataFiltra.includes('grey')}/>
                <label htmlFor="option9">Γκρι</label>
            </div>
            <div className="inputGroupDeskPink">
                <input id="option10" name="option10" type="checkbox" value='pink' onChange={filterByColor} checked={xrwmataFiltra.includes('pink')}/>
                <label htmlFor="option10">Ροζ</label>
            </div>
            <div className="inputGroupDeskLime">
                <input id="option11" name="option11" type="checkbox" value='lime' onChange={filterByColor} checked={xrwmataFiltra.includes('lime')}/>
                <label htmlFor="option11">Λάιμ</label>
            </div>
            <div className="inputGroupDeskBrown">
                <input id="option12" name="option12" type="checkbox" value='brown' onChange={filterByColor} checked={xrwmataFiltra.includes('brown')}/>
                <label htmlFor="option12">Καφέ</label>
            </div>
            <div className="inputGroupDeskSkyBlue">
                <input id="option13" name="option13" type="checkbox" value='LightSkyBlue' onChange={filterByColor} checked={xrwmataFiltra.includes('LightSkyBlue')}/>
                <label htmlFor="option13">Γαλάζιο</label>
            </div>                 
        </div>
    </div>
    )
}

export default ColorFilterDesk
