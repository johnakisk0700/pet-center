const ColorFilterDesk = ({filterByColor}) => {
    return (
        <div className='markes-filter-desk'>
            <h3 className='text-white m-3'>Χρώματα</h3>
        <div className='markes-wrapper-desk'> 
        <div className='inputGroupDeskBlack'>
                <input id="option2" name="option1" type="checkbox" value='black' onChange={filterByColor} />
                <label htmlFor="option2">Μαύρο</label>
            </div>  
            <div className="inputGroupDeskRed">
                <input id="option1" name="option1" type="checkbox" value='red' onChange={filterByColor} />
                <label htmlFor="option1">Κόκκινο</label>
            </div>
            <div className="inputGroupDeskBlue">
                <input id="option3" name="option3" type="checkbox" value='blue' onChange={filterByColor} />
                <label htmlFor="option3">Μπλέ</label>
            </div>
            <div className="inputGroupDeskLGreen">
                <input id="option4" name="option4" type="checkbox" value='lightgreen' onChange={filterByColor} />
                <label htmlFor="option4">Λαχανί</label>
            </div>
            <div className="inputGroupDeskTeal">
                <input id="option5" name="option5" type="checkbox" value='teal' onChange={filterByColor} />
                <label htmlFor="option5">Γαλαζοπράσινο</label>
            </div>
            <div className="inputGroupDeskPurple">
                <input id="option6" name="option6" type="checkbox" value='purple' onChange={filterByColor} />
                <label htmlFor="option6">Μωβ</label>
            </div>
            <div className="inputGroupDeskOrange">
                <input id="option7" name="option7" type="checkbox" value='orange' onChange={filterByColor} />
                <label htmlFor="option7">Πορτοκαλί</label>
            </div>
            <div className="inputGroupDeskViolet">
                <input id="option8" name="option8" type="checkbox" value='violet' onChange={filterByColor} />
                <label htmlFor="option8">Βιολετί</label>
            </div> 
            <div className="inputGroupDeskGray">
                <input id="option9" name="option9" type="checkbox" value='grey' onChange={filterByColor} />
                <label htmlFor="option9">Γκρι</label>
            </div>
            <div className="inputGroupDeskPink">
                <input id="option10" name="option10" type="checkbox" value='pink' onChange={filterByColor} />
                <label htmlFor="option10">Ροζ</label>
            </div>
            <div className="inputGroupDeskLime">
                <input id="option11" name="option11" type="checkbox" value='lime' onChange={filterByColor} />
                <label htmlFor="option11">Λάιμ</label>
            </div>
            <div className="inputGroupDeskBrown">
                <input id="option12" name="option12" type="checkbox" value='brown' onChange={filterByColor} />
                <label htmlFor="option12">Καφέ</label>
            </div>                 
        </div>
    </div>
    )
}

export default ColorFilterDesk
