const SubDropdownMenu = (props) => {
    return (
        <div className='subdropdownmenu-wrapper'>
            <div className={'subdropdownmenu'}>
                {props.children}
            </div>
        </div>
    )
}

export default SubDropdownMenu