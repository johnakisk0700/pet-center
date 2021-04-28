//import SVGs
import Bird from '../svg-icons/bird.svg';
import Cat from '../svg-icons/cat.svg';
import Dog from '../svg-icons/dog.svg';
import Fish from '../svg-icons/fish.svg';
import Rabbit from '../svg-icons/rabbit.svg';
import Turtle from '../svg-icons/turtle.svg';
//import comps
import MenuItem from './MenuItem';
import DropdownMenu from './DropdownMenu';
import Category from './Category';
import {Link} from 'react-router-dom';
import SubDropdownMenu from './SubDropdownMenu';

const Menu = (props) => {
    return (
        <nav className='ts-navbar'>
            <ul className='ts-navbar-nav'>
                <MenuItem title='Γάτα' icon={Cat} url='/gata'>
                    <DropdownMenu>
                        <Category title='Τροφές' url='/gata/trofes'>
                            <SubDropdownMenu type='subdropdownmenu-wrapper'>
                                <Link to='/gata/trofes/kshra/proionta'>Ξηρά Τροφή</Link>
                                <Link to='/gata/trofes/ygrh/proionta'>Υγρή Τροφή</Link>
                                <Link to='/gata/trofes/klinikes/proionta'>Κλινικές Δίαιτες</Link>
                            </SubDropdownMenu>
                        </Category>
                        <Category title='Λιχουδιές' url='/gata/lixoudies/proionta'/>
                        <Category title='Ονυχοδρόμια' url='/gata/onyxodromia/proionta'/>
                        <Category title='Παιχνίδια' url='/gata/paixnidia/proionta'/>
                        <Category title='Μπωλ' url='/gata/mpwl/proionta'/>
                        <Category title='Λουριά' url='/gata/louria/proionta'/>
                        <Category title='Cage Μεταφοράς' url='/gata/travelcage/proionta' />
                        <Category title='Κρεβάτια' url='/gata/krevatia/proionta' />
                        <Category title='Λεκάνες & Άμμοι' url='/gata/lekanes/proionta' />
                        <Category title='Χτένες - Σαμπουάν' url='/gata/xtenesampouan/proionta'/>
                        <Category title='Συμπληρώματα Διατροφής' url='/gata/symplhrwmata/proionta'/>
                        <Category title='Είδη Υγιεινής' url='/gata/ygeia/proionta'/>
                    </DropdownMenu>
                </MenuItem>
                <MenuItem title='Σκύλος' icon={Dog} url='/skylos'>
                    <DropdownMenu>
                        <Category title='Τροφές' url='/skylos/trofes'>
                            <SubDropdownMenu type='subdropdownmenu-wrapper'>
                                <Link to='/skylos/trofes/kshra/proionta'>Ξηρά Τροφή</Link>
                                <Link to='/skylos/trofes/ygrh/proionta'>Υγρή Τροφή</Link>
                                <Link to='/skylos/trofes/klinikes/proionta'>Κλινικές Δίαιτες</Link>
                            </SubDropdownMenu>
                        </Category>
                        <Category title='Λιχουδιές' url='/skylos/lixoudies/proionta'/>
                        <Category title='Κόκκαλα' url='/skylos/kokkala/proionta'/>
                        <Category title='Παιχνίδια' url='/skylos/paixnidia/proionta'/>
                        <Category title='Μπωλ' url='/skylos/mpwl/proionta'/>
                        <Category title='Λουριά' url='/skylos/louria/proionta'/>
                        <Category title='Cage Μεταφοράς' url='/skylos/travelcage/proionta' />
                        <Category title='Κρεβάτια' url='/skylos/krevatia/proionta' />
                        <Category title='Χτένες - Σαμπουάν' url='/skylos/xtenesampouan/proionta'/>
                        <Category title='Συμπληρώματα Διατροφής' url='/skylos/symplhrwmata/proionta'/>
                        <Category title='Είδη Υγιεινής' url='/skylos/ygeia/proionta'/>

                    </DropdownMenu>
                </MenuItem>
                <MenuItem title='Πτηνό' diorthwsh='pouli' icon={Bird} url='/pthno'>
                    <DropdownMenu>
                        <Category title='Τροφές' url='/pthno/trofes/proionta'/>
                        <Category title='Κλουβιά' url='/pthno/klouvia/proionta'/>
                        <Category title='Ταίστρες' url='/pthno/taistres/proionta'/>
                        <Category title='Ποτίστρες' url='/pthno/potistres/proionta'/>
                        <Category title='Πατήθρες' url='/pthno/patithres/proionta'/>
                        <Category title='Πάτοι Κλουβιών' url='/pthno/patoi/proionta'/>
                        <Category title='Παιχνίδια' url='/pthno/paixnidia/proionta'/>
                        <Category title='Αξεσουάρ' url='/pthno/aksesouar/proionta' />

                    </DropdownMenu>
                </MenuItem>
                <MenuItem title='Ψάρι' icon={Fish} url='/psari'>
                    <DropdownMenu>
                        <Category title='Τροφές - Βελτιωτικά Νερού' url='/psari/trofes/proionta'/>
                        <Category title='Ενυδρεία' url='/psari/enydreia/proionta'/>
                        <Category title='Διακοσμητικά' url='/psari/diakosmhtika/proionta'/>
                        <Category title='Εξοπλισμός Ενυδρείου' url='/psari/eksoplismos/proionta'/>
                        <Category title='Τέστ' url='/psari/test/proionta'/>
                    </DropdownMenu>
                </MenuItem>
                <MenuItem title='Τρωκτικό' icon={Rabbit} url='/trwktiko'>
                    <DropdownMenu>
                        <Category title='Τροφές' url='/trwktiko/trofes/proionta'/>
                        <Category title='Μπωλ' url='/trwktiko/mpwl/proionta'/>
                        <Category title='Κλουβιά' url='/trwktiko/klouvia/proionta'/>
                        <Category title='Υποστρώματα' url='/trwktiko/ypostrwmata/proionta'/>
                        <Category title='Είδη Υγιεινής' url='/trwktiko/ygeia/proionta'/>
                        <Category title='Αξεσουάρ' url='/trwktiko/aksesouar/proionta' />
                    </DropdownMenu>
                </MenuItem>
                <MenuItem title='Ερπετό' icon={Turtle} url='/erpeto'>
                    <DropdownMenu>
                        <Category title='Τροφές' url='/erpeto/trofes/proionta'/>
                        <Category title='Terrarium' url='/erpeto/terrarium/proionta'/>
                        <Category title='Συμπληρώματα Διατροφής' url='/erpeto/symplhrwmata/proionta'/>
                        <Category title='Αξεσουάρ' url='/erpeto/aksesouar/proionta'/>
                    </DropdownMenu>
                </MenuItem>
            </ul>
        </nav>
    )
}

export default Menu

/* <Category title='' /> */