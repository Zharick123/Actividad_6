import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../actividad6@0.0.0 npx/src/pages/Home';
import Products from '../../actividad6@0.0.0 npx/src/pages/Products';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Payment from './components/Payment';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
      <Payment isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} />
    </Router>
  );
};

export default App;
