export interface Book  {
    id: string;
    title: string;
    author: string;
  };
  
export interface FavoriteContextType {
    favorites: Book[];
    addFavorite: (book: Book) => void;
    removeFavorite: (bookId: string) => void;
    isFavorite: (bookId: string) => boolean;
  };