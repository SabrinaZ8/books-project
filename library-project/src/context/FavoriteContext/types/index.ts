import { Book } from '../../../types/index';

/*export interface Book  {
    key: string;
    title: string;
    author_name: string;
  };*/
  
export interface FavoriteContextType {
    favorites: Book[];
    addFavorite: (book: Book) => void;
    removeFavorite: (bookId: string) => void;
    isFavorite: (bookId: string) => boolean;
  };