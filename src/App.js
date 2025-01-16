import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import StoreCategory from './Pages/StoreCategory';
import SignInSignUP from './Pages/SignInSignUp'
import Cart from './Pages/Cart'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/mouse' element = {<StoreCategory category = 'mouse' />} />
        
          <Route path='/radio' element={<StoreCategory category='radio' />} />
          <Route path='/headphone' element={<StoreCategory category='headphone' />} />
          
          <Route path='/signin' element={<SignInSignUP />} />
          <Route Path='/cart' element={<Cart /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
