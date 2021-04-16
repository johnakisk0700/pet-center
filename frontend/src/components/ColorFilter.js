import { Button } from 'react-bootstrap'
const ColorFilter = ({filterByColor, setColorFilterComp, isActive}) => {
    return (
    <div className='markes-filter' style={!isActive ? {transform: 'translateX(100%)'} : {}}>
            <h3 className='text-white m-3'>Χρώματα</h3>
        <div className='markes-wrapper'> 
        <div className='inputGroupBlack'>
                <input id="option2" name="option1" type="checkbox" value='black' onChange={filterByColor} />
                <label htmlFor="option2">Μαύρο</label>
            </div>  
            <div className="inputGroupRed">
                <input id="option1" name="option1" type="checkbox" value='red' onChange={filterByColor} />
                <label htmlFor="option1">Κόκκινο</label>
            </div>
            <div className="inputGroupBlue">
                <input id="option3" name="option3" type="checkbox" value='blue' onChange={filterByColor} />
                <label htmlFor="option3">Μπλέ</label>
            </div>
            <div className="inputGroupLGreen">
                <input id="option4" name="option4" type="checkbox" value='lightgreen' onChange={filterByColor} />
                <label htmlFor="option4">Λαχανί</label>
            </div>
            <div className="inputGroupTeal">
                <input id="option5" name="option5" type="checkbox" value='teal' onChange={filterByColor} />
                <label htmlFor="option5">Γαλαζοπράσινο</label>
            </div>
            <div className="inputGroupPurple">
                <input id="option6" name="option6" type="checkbox" value='purple' onChange={filterByColor} />
                <label htmlFor="option6">Μωβ</label>
            </div>
            <div className="inputGroupOrange">
                <input id="option7" name="option7" type="checkbox" value='orange' onChange={filterByColor} />
                <label htmlFor="option7">Πορτοκαλί</label>
            </div>
            <div className="inputGroupViolet">
                <input id="option8" name="option8" type="checkbox" value='violet' onChange={filterByColor} />
                <label htmlFor="option8">Βιολετί</label>
            </div> 
            <div className="inputGroupGray">
                <input id="option9" name="option9" type="checkbox" value='grey' onChange={filterByColor} />
                <label htmlFor="option9">Γκρι</label>
            </div>
            <div className="inputGroupPink">
                <input id="option10" name="option10" type="checkbox" value='pink' onChange={filterByColor} />
                <label htmlFor="option10">Ροζ</label>
            </div>
            <div className="inputGroupLime">
                <input id="option11" name="option11" type="checkbox" value='lime' onChange={filterByColor} />
                <label htmlFor="option11">Λάιμ</label>
            </div>
            <div className="inputGroupBrown">
                <input id="option12" name="option12" type="checkbox" value='brown' onChange={filterByColor} />
                <label htmlFor="option12">Καφέ</label>
            </div>
            <div className="inputGroupSkyBlue">
                <input id="option13" name="option13" type="checkbox" value='LightSkyBlue' onChange={filterByColor} />
                <label htmlFor="option13">Γαλάζιο</label>
            </div>                 
        </div>
        <Button variant='danger' onClick={() => setColorFilterComp(false)}>Επιβεβαίωση</Button>
    </div>
    )
}

export default ColorFilter
