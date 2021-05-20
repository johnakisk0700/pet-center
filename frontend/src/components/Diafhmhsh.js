import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import PhoneButton from './layout/PhoneButton'


const Diafhmhsh = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <div className='diafhmish'>
        <AutoplaySlider
        play={true}
        interval={3000}
        animation="fallAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        an
        className='ad'
      >
        <div data-src='/diafhmiseis/1.png' alt='PEP' />
        <div data-src='/diafhmiseis/2.jpg' alt='PEP' />
        <div data-src='/diafhmiseis/3.png' alt='PEP' />
        <div data-src='/diafhmiseis/4.png' alt='PEP' />
        <div data-src='/diafhmiseis/5.jpg' alt='PEP' />
      </AutoplaySlider>
      <div className='social-media'>
        <div className='anakoinwsh'>
          <div className='text-center anakoinwsh-text'>Δεχόμαστε μόνο τηλεφωνικές παραγγελίες</div>
          <PhoneButton title='Τηλέφωνα Επικοινωνίας' />
        </div>
      </div>
    </div>
    )
}

export default Diafhmhsh
