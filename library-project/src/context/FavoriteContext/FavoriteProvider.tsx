import { useState, ReactNode, useEffect } from "react";
import { FavoriteContext } from "./FavoriteContext";
import { FavoriteContextType } from "./types/index";
import { Book } from "../../types/index";

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (book: Book) => {
    const isFavorite = favorites.some((fav) => fav.key === book.key);
    if (!isFavorite) {
    setFavorites((prev) => [...prev, book]);
  };}

  const removeFavorite = (bookKey: string) => {
    setFavorites((prev) => prev.filter((book) => book.key !== bookKey));
  };

  const isFavorite = (bookKey: string) => {
    return favorites.some((book) => book.key === bookKey);
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
