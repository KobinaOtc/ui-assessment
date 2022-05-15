import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomePage } from '_Home/modules/HomePage'
import { ProductPage } from '_Home/modules/ProductPage'

import { ROUTES } from './constants'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}
