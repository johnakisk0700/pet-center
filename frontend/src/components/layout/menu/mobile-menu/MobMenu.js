const MobMenu = (props) => {
    return (
        <ul className='mob-menu d-flex justify-content-center flex-column m-4'>
            {props.children}
        </ul>
    )
}

export default MobMenu
