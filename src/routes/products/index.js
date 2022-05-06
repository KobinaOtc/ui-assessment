import { Routes, Route } from 'react-router-dom';
import ProductsPreview from './all';
import Details from './details';
import NoMatch from '../no_match';

const index = () => {
  return (
    <Routes>
      <Route index element={<ProductsPreview />} />
      <Route path=":productId" element={<Details />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default index