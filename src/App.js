import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleProductDetails from './components/SingleProductDetails';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Login from './components/Login/Login';
import OrderPlaced from './components/OrderPlaced';
import PrivateRoute from './components/PrivateRoute';
import AdminDashBoard from './components/AdminDashBoard';

export const ProductContext = createContext();
export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProductContext.Provider value={[products, setProducts]}>
        <CartContext.Provider value={[cart, setCart]}>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/productdetails/:id' element={<SingleProductDetails />} ></Route>
              <Route path='/cart' element={<Cart />} ></Route>
              <Route path='/login' element={<Login />} ></Route>
              <Route element={<PrivateRoute />}>
                <Route path='/orderplaced' element={<OrderPlaced />} ></Route>
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path='/admin' element={<AdminDashBoard />} ></Route>
              </Route>
              <Route path='*' element={<NotFound />} ></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </CartContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
