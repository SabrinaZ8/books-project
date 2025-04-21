import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { ProductSingle } from '../pages/ProductSingle/ProductSingle';
import { ListBooks } from '../pages/ListBooks/ListBooks';

export const AppRoutes = () => {
    return (
      <BrowserRouter basename='/'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/book/:key" element={<ProductSingle />} />
            <Route path="/listbooks" element={<ListBooks />} />
          </Routes>
      </BrowserRouter>
    );
  };
