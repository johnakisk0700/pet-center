import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <li className={`menu-item ${props.diorthwsh}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
            <Link to={props.url} className='d-flex justify-content-center' style={{color: 'white', textDecoration: 'none'}}><img className='menu-icon' src={props.icon} alt='...'/> {props.title}</Link>
            {isShown && (props.children)} 
        </li>  
    )
}

export default MenuItem
