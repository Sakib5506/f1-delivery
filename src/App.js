import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleProductDetails from './components/SingleProductDetails';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <CartContext.Provider value={[cart, setCart]}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/productdetails/:id' element={<SingleProductDetails />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
