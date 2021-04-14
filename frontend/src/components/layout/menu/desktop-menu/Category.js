import { LinkContainer } from 'react-router-bootstrap';
import React, { useState } from 'react';

const Category = (props) => {
    let link = props.url ? props.url : '/';
    let arrow = props.children;
    const [isShown, setIsShown] = useState(false);
    return (
        <LinkContainer to={link}>
        <ul className='dropdowncategory' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className={arrow ? 'd-flex justify-content-center' : ''}>{props.title} {arrow && <div className='arrow-wrapper'><img className='arrow' src='/menu-photos/right-arrow.svg' alt='...'/></div> }</div>
            
            {isShown && props.children}
        </ul>
        </LinkContainer>
    )
}

export default Category
