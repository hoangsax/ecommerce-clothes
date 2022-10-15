import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home/Home';
import Header from './components/Header';
import User from './components/User/User';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="header" element={<Header/>} />
          <Route path="user" element={<User/>} />
          <Route path="detail" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
