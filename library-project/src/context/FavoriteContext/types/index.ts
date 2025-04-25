
export type FavoriteBook = {
  key: string; // presente nos dois
  title: string;
  author_name?: string[]; // do search.json
  authors?: { key: string; name?: string }[]; // do works.json
  cover_i?: number; // do search
  covers?: number[]; // do works
  description?: string | { type: string; value: string };
  first_publish_date?: string;
  subjects?: string[];
};
  
export interface FavoriteContextType {
    favorites: FavoriteBook[];
    addFavorite: (book: FavoriteBook) => void;
    removeFavorite: (bookId: string) => void;
    isFavorite: (bookId: string) => boolean;
  };