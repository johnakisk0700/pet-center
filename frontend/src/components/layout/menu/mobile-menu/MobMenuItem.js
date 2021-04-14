const MobMenuItem = (props) => {
    return (
        <li className='mob-menu-item d-flex justify-content-center p-3 m-1'>
            <img className='menu-icon' src={props.icon} alt='...'/> {props.title}
            <div className='mob-arrow-wrapper'><img className='arrow' src='/menu-photos/right-arrow.svg' alt='velaki'/></div>
        </li>
    )
}

export default MobMenuItem
