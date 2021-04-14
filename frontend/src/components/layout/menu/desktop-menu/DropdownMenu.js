const DropdownMenu = (props) => {
    return (
        <div className='dropdownmenu-wrapper'>
            <div className={'dropdownmenu mt-3'}>
                {props.children}
            </div>
        </div>
    )
}

export default DropdownMenu
