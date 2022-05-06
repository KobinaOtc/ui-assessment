import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Product from './routes/products'
import NoMatch from './routes/no_match';
import './assets/styles/globals.scss'

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products/*' element={<Product />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
