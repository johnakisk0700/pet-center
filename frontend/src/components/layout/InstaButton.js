import insta from './instagram.svg';

const InstaButton = () => {
    return (
        <a class='epikoinwnia-btn insta' href='https://www.instagram.com/petcenterpatras/' >
            <img src={insta} alt='instagram link button'></img>
            <div>@petcenterpatras</div>
        </a>
    )
}

export default InstaButton
