import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import StoreCategory from './Pages/StoreCategory';
import SignInSignUP from './Pages/SignInSignUp';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart';
import { StoreProvider } from './Context/StoreContext.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/mouse' element={<StoreCategory category='mouse' />} />
            <Route path='/radio' element={<StoreCategory category='radio' />} />
            <Route
              path='/headphone'
              element={<StoreCategory category='headphone' />}
            />
            <Route path='/signin' element={<SignInSignUP />} />
            <Route path='/cart' element={<Cart />} />
            
          </Routes>
          <Footer />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
