import  PetLogo  from './logo-pet-center.svg';
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './menu/desktop-menu/Menu';
import MobMenu from './menu/mobile-menu/MobMenu';
import MobMenuItem from './menu/mobile-menu/MobMenuItem';
import Burger from './menu/mobile-menu/Burger';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
//import SVGs
import Bird from './menu/svg-icons/bird.svg';
import Cat from './menu/svg-icons/cat.svg';
import Dog from './menu/svg-icons/dog.svg';
import Fish from './menu/svg-icons/fish.svg';
import Rabbit from './menu/svg-icons/rabbit.svg';
import Turtle from './menu/svg-icons/turtle.svg';

const Header = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });
    const [isDrop, setIsDrop] = useState(false);
    const nodeRef = useRef(null);
    const nodeRef2 = useRef(null);
    return (


            <>    
                    {isTablet && <>
                        <CSSTransition
                        in={!isDrop}
                        nodeRef={nodeRef}
                        timeout={180}
                        classNames="mob-header-dropdown"
                        unmountOnExit
                        >  
                            <Row className='mob-header m-0' ref={nodeRef} style={isDrop ? {boxShadow: '0 0 transparent'}  : {}}>
                                <Col xs={2}>
                                </Col>
                                
                                <LinkContainer to='/'><Col className='d-flex justify-content-center'>
                                        
                                        <img className='mob-logo' src={PetLogo} alt='logo' />
                                        
                                </Col></LinkContainer>
                                
                                <Col xs={2} className='d-flex justify-content-center' onClick={() => setIsDrop(!isDrop)}>
                                    <Burger />
                                </Col>
                            
                            </Row>
                        </CSSTransition>
                        
                        <CSSTransition
                        in={isDrop}
                        nodeRef={nodeRef2}
                        timeout={180}
                        classNames="mob-dropdown"
                        unmountOnExit
                        >
                        <Row className='mob-menu-wrapper m-0' ref={nodeRef2}>
                            <Col xs={2}>
                            </Col >
                            
                            <LinkContainer to='/' onClick={() => setIsDrop(!isDrop)}><Col xs={8} className='d-flex justify-content-center'>
                                    
                                    <img className='mob-logo' src={PetLogo} alt='logo' />
                                    
                            </Col></LinkContainer>
                            
                            <Col xs={2} className='d-flex justify-content-center' onClick={() => setIsDrop(!isDrop)}>
                                <Burger x='is-active'/>
                            </Col>
                            <Col xs={12}>
                                <MobMenu >
                                    <Link to='/gata' onClick={() => setIsDrop(false)}><MobMenuItem title='Γάτα' icon={Cat}/></Link>
                                    <Link to='/skylos' onClick={() => setIsDrop(false)}><MobMenuItem title='Σκύλος' icon={Dog} /></Link>
                                    <Link to='/pthno' onClick={() => setIsDrop(false)}><MobMenuItem title='Πτηνό' icon={Bird} /></Link>
                                    <Link to='/psari' onClick={() => setIsDrop(false)}><MobMenuItem title='Ψάρι' icon={Fish} /></Link>
                                    <Link to='/trwktiko' onClick={() => setIsDrop(false)}><MobMenuItem title='Τρωκτικό' icon={Rabbit} /></Link>
                                    <Link to='/erpeto' onClick={() => setIsDrop(false)}><MobMenuItem title='Ερπετό' icon={Turtle} /></Link>
                                </MobMenu>
                            </Col>
                        </Row>
                        </CSSTransition>
                    </>}

                    
                    {isDesktop && <>
                    <Container className='header p-0'>
                        <Row className='text-center justify-content-center m-0'>
                            <LinkContainer to='/'><Col xs={10} lg={8} xl={12}> <img className='logo' src={PetLogo} alt='logo' /> </Col></LinkContainer>
                            <Col lg className='d-flex'><Menu /></Col>
                        </Row>
                    </Container>
                    </>
                    }
            </>         
    )
}

export default Header
