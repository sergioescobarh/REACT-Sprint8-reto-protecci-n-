import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Form from './components/form/Form';
import Rancking from './components/rancking/Rancking';
import Footer from './components/footer/Footer';
import Rules from './components/rulesParticipation/Rules';
import Products from './components/products/Products';
import Collection from './components/collectionDescription/Collection';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rules/>
      <div className='container-products-collection'>
      <Products/>
      <Collection/>
      </div>
      <div className='container-form-rancking'>
        <Form />
        <Rancking />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
