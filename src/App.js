import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/mouse' element = {<ShopCategory category = 'mouse' />} />
        
          <Route path='/radio' element={<ShopCategory category='radios' />} />
          <Route path = '/headphones' element = {<ShopCategory category = 'headphones' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
