import { createContext, useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Header></Header>
      <Hero></Hero>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </ProductContext.Provider>
  );
}

export default App;
