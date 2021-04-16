import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                    <div className='text-center py-3'> 
                        <h6>Πληροφορίες Καταστήματος</h6>
                        <div><i>Τηλ.</i> : 2613-027682</div> 
                        <div><i>Οδός</i> : Κωνσταντινουπόλεως 53 Πάτρα 26223</div>
                        <div></div>
                    </div>
                    <div></div>
                    <div className='text-center py-3'>
                        <h6><i>Ωράριο Λειτουργίας</i> : </h6>
                        <div><i>Δευ.</i> : 9:00-15:00</div>
                        <div><i>Τρι.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Τετ.</i> : 9:00-15:00</div>
                        <div><i>Πεμ.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Παρ.</i> : 9:00-14:30, 17:30-21:00</div>
                        <div><i>Σαβ.</i> : 9:00-15:00</div>
                        <div><i>Κυρ.</i> : <i>Κλειστά</i></div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer
