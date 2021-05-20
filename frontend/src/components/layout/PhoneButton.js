import phone from './phone.svg';

const PhoneButton = ({ title }) => {
    return (
        <a class='epikoinwnia-btn phone' href="#footer">
            <img src={ phone }/>
            <div>{title}</div>
        </a>
    )
}

export default PhoneButton
