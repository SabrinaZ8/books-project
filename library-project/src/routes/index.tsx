import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from '../pages/Favorites/Favorites';
import { Home } from '../pages/Home/Home';
import { ListBooks } from '../pages/ListBooks/ListBooks';
import { BookPage } from '../pages/BookPage/BookPage';
import ScrollToTop from '../components/ScrollToTop';
import { Credits } from '../pages/Credits/Credits';

export const AppRoutes = () => {
    return (
      <BrowserRouter basename='/'>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/book/:keyParam" element={<BookPage />} />
            <Route path="/listbooks" element={<ListBooks />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
      </BrowserRouter>
    );
  };
