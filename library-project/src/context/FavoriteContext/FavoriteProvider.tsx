import { useState, ReactNode } from 'react';
import { FavoriteContext } from './FavoriteContext';
import { FavoriteContextType, Book } from './types/index';

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  const addFavorite = (book: Book) => {
    setFavorites((prev) => [...prev, book]);
  };

  const removeFavorite = (bookId: string) => {
    setFavorites((prev) => prev.filter((book) => book.id !== bookId));
  };

  const isFavorite = (bookId: string) => {
    return favorites.some((book) => book.id === bookId);
  };

  const contextValue: FavoriteContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
