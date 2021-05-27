import phone from './phone.svg';

const PhoneButton = ({ title }) => {
    return (
        <a class='epikoinwnia-btn phone' href="#footer" >
            <img src={ phone } alt='phone button'/>
            <div>{title}</div>
        </a>
    )
}

export default PhoneButton
