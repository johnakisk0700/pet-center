const Burger = (props) => {
    return (
        <button className={`hamburger hamburger--boring ${props.x}`} type="button">
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Burger
