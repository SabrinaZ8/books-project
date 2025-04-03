import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { ProductSingle } from '../pages/ProductSingle/ProductSingle';

export const AppRoutes = () => {
    return (
      <BrowserRouter basename='/'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/singleProduct/:id" element={<ProductSingle />} />
          </Routes>
      </BrowserRouter>
    );
  };
