import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
