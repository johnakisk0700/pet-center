import { BrowserRouter as Router, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
//import bootstrap
import { Container } from 'react-bootstrap'
// Importing components/routes
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import BigLoader from './components/BigLoader'
const HomeScreen = lazy(() => import ('./screens/HomeScreen.js'))
const CatScreen = lazy(()=> import ('./screens/menuscreens/cat/CatScreen.js'))
const CatFoodScreen = lazy(() => import ('./screens/menuscreens/cat/CatFoodScreen.js'))
const DogScreen = lazy(() => import ('./screens/menuscreens/dog/DogScreen.js'))
const AdminScreen = lazy(() => import ('./screens/AdminScreen.js'))
const ProductsScreen = lazy(() => import ('./screens/ProductsScreen.js'))
const FishScreen = lazy(() => import ('./screens/menuscreens/fish/FishScreen.js'))
const DogFoodScreen = lazy(() => import ('./screens/menuscreens/dog/DogFoodScreen.js'))
const RodentScreen = lazy(() => import ('./screens/menuscreens/rodent/RodentScreen.js'))
const CrawlerScreen = lazy(() => import ('./screens/menuscreens/crawler/CrawlerScreen.js'))
const ProductScreen = lazy(() => import ('./screens/ProductScreen.js'))
const BirbScreen = lazy(() => import ('./screens/menuscreens/birb/BirbScreen.js'))
function App() {
  return (
    <Router>  
      <div className='page-container'>
        <ScrollToTop />
        {window.location.pathname !== '/adminerino' ? <Header /> : null}
          <div className='content-container'>
          <Route path='/adminerino' component={AdminScreen} exact />
            <Container>
              <Suspense fallback={<div style={{marginTop: '15vh'}}><BigLoader /></div>}>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/gata' component={CatScreen} exact />
                <Route path='/gata/trofes' component={CatFoodScreen} exact />
                <Route path='/skylos' component={DogScreen} exact />
                <Route path='/skylos/trofes' component={DogFoodScreen} exact />
                <Route path='/psari' component={FishScreen} exact />
                <Route path='/trwktiko' component={RodentScreen} exact />
                <Route path='/pthno' component={BirbScreen} exact />
                <Route path='/erpeto' component={CrawlerScreen} exact />
                <Route path='/:animal/:category/proionta' component={ProductsScreen} exact/>
                <Route path='/:animal/:category/:subcategory/proionta' component={ProductsScreen} exact/>
                <Route path='/:animal/:category/:subcategory/:brand/proionta' component={ProductsScreen} exact/>
                <Route path='/:animal/:category/proion/:id' component={ProductScreen} exact/>
                <Route path='/:animal/:category/:subcategory/proion/:id' component={ProductScreen} exact/>
              </Suspense>
              
            </Container>
          </div>
          {window.location.pathname !== '/adminerino' ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App
