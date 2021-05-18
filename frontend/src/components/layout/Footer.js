import { Container } from 'react-bootstrap';
import  PetLogo  from './logo-pet-center.svg'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                    <div className='text-center py-3'>
                        <img src={PetLogo} alt='petcenter logo'></img> 
                        <div className='footer-title-wrapper'>    
                            <h6>Πληροφορίες Καταστημάτων</h6>
                        </div><br></br>
                        <div className='footer-katasthma'>Κατάστημα 1:</div><br></br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12532.368906857966!2d21.742454!3d38.254167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e4917593f19f7%3A0xa97815136109f165!2sPet%20Center%20Patras!5e0!3m2!1sen!2sgr!4v1621362770168!5m2!1sen!2sgr" title='odos1' style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
                        <div><i>Οδός</i> : Κωνσταντινουπόλεως 53, Πάτρα, 26441</div>
                        <div><i>Τηλ.</i> : 2613-027682</div><br></br>
                        <div className='footer-katasthma'>Κατάστημα 2:</div><br></br>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.3621492208035!2d21.74262964177065!3d38.22470299499809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e366b2773254b%3A0xb0d264ccbd826b5d!2zzpHOo86XzpzOkc6azp_OoM6fzqXOm86fzqUgzpLOkc6jzpnOm86ZzprOlyAtIFBldCBTaG9w!5e0!3m2!1sen!2sgr!4v1621362951472!5m2!1sen!2sgr"  title='odos2' style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
                        <div><i>Οδός</i> : Ακρωτηρίου 77, Πάτρα, 26500</div>
                        <div><i>Τηλ.</i> : 2610-340111</div> 
                    </div>
                    <div className='text-center py-3'>
                        <div className='footer-title-wrapper'>    
                            <h6>Ωράριο Λειτουργίας</h6>
                        </div>
                        <div><i>Δευ.</i> : 9:00-15:00</div>
                        <div><i>Τρι.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Τετ.</i> : 9:00-15:00</div>
                        <div><i>Πεμ.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Παρ.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Σαβ.</i> : 9:00-15:00</div>
                        <div><i>Κυρ.</i> : <i>Κλειστά</i></div>
                    </div>
            </div>
        </>
    )
}

export default Footer
