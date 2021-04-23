import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Container className='footer'>
                    <div className='text-center py-3'> 
                        <div className='footer-title-wrapper'>    
                            <h6>Πληροφορίες Καταστημάτων</h6>
                        </div>
                        <div className='footer-katasthma'>Κατάστημα 1:</div>
                        <div><i>Τηλ.</i> : 2613-027682</div> 
                        <div><i>Οδός</i> : Κωνσταντινουπόλεως 53, Πάτρα, 26441</div><br></br>
                        <div className='footer-katasthma'>Κατάστημα 2:</div>
                        <div><i>Τηλ.</i> : 2610-340111</div> 
                        <div><i>Οδός</i> : Ακρωτηρίου 77, Πάτρα, 26500</div>
                        <div></div>
                    </div>
                    <div></div>
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
            </Container>
        </>
    )
}

export default Footer
