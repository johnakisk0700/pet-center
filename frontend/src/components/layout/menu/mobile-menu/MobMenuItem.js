const MobMenuItem = (props) => {
    return (
        <li className='mob-menu-item d-flex justify-content-center p-3 m-1'>
            <img className='menu-icon' src={props.icon} alt='...'/> <div className='mob-menu-title'>{props.title}</div>
            <div className='mob-arrow-wrapper'><img className='arrow' src='/menu-photos/right-arrow.svg' alt='velaki'/></div>
        </li>
    )
}

export default MobMenuItem
