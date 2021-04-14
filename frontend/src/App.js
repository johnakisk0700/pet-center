import { BrowserRouter as Router, Route } from 'react-router-dom'
//import bootstrap
import { Container } from 'react-bootstrap'
// Importing components/routes
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeScreen from './screens/HomeScreen'
import CatScreen from './screens/menuscreens/cat/CatScreen'
import CatFoodScreen from './screens/menuscreens/cat/CatFoodScreen'
import DogScreen from './screens/menuscreens/dog/DogScreen'
import DogFoodScreen from './screens/menuscreens/dog/DogFoodScreen'
import FishScreen from './screens/menuscreens/fish/FishScreen'
import RodentScreen from './screens/menuscreens/rodent/RodentScreen'
import BirbScreen from './screens/menuscreens/birb/BirbScreen'
import ProductsScreen from './screens/ProductsScreen'
import AdminScreen from './screens/AdminScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>  
      <div className='page-container'>
        {window.location.pathname !== '/adminerino' ? <Header /> : null}
          <div className='content-container'>
          <Route path='/adminerino' component={AdminScreen} exact />
            <Container>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/gata' component={CatScreen} exact />
              <Route path='/gata/trofes' component={CatFoodScreen} exact />
              <Route path='/skylos' component={DogScreen} exact />
              <Route path='/skylos/trofes' component={DogFoodScreen} exact />
              <Route path='/psari' component={FishScreen} exact />
              <Route path='/trwktiko' component={RodentScreen} exact />
              <Route path='/pthno' component={BirbScreen} exact />
              <Route path='/:animal/:category/proionta' component={ProductsScreen} exact/>
              <Route path='/:animal/:category/:subcategory/proionta' component={ProductsScreen} exact/>
              <Route path='/:animal/:category/:subcategory/:brand/proionta' component={ProductsScreen} exact/>
              <Route path='/:animal/:category/proion/:id' component={ProductScreen} exact/>
              <Route path='/:animal/:category/:subcategory/proion/:id' component={ProductScreen} exact/>

              
            </Container>
          </div>
          {window.location.pathname !== '/adminerino' ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App
