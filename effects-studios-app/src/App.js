import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Homepage/HomePage";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product_view" element={<ProductViewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
