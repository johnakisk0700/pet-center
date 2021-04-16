const DropdownMenu = (props) => {
    return (
        <div className='dropdownmenu-wrapper'>
            <ul className={'dropdownmenu mt-3'}>
                {props.children}
            </ul>
        </div>
    )
}

export default DropdownMenu
