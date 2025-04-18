import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext/FavoriteContext';

export const useFavoritesContext = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
      throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
  };