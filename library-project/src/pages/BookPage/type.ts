export type Book = {
  key: string;
  title: string;
  authors: {
    key: string;
    name?: string;
  }[];
  description?: string | { type: string; value: string };
  covers: number[];
  first_publish_date: string;
  subjects: string[];
};

export type Author = {
  key: string;
  name?: string;
  photos: string | null;
  bio: string | { type: string; value: string };
  birth_date: string;
  death_date: string;
};

export type AuthorErrorType = {
  hasError: boolean;
  message: string;
};

export type authorKeyType = {
  authorKey: string;
  setAuthorName: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<AuthorErrorType>>;
};

export type BookDetailsProps = {
  setAuthorKey: React.Dispatch<React.SetStateAction<string | null>>;
  setError: React.Dispatch<React.SetStateAction<AuthorErrorType>>;
};

export type AuthorKeyProp = {
  authorKey: string;
};

export type BooksAuthorType = {
  key: string;
  title: string;
  covers: number[];
};

export type EditionsType = {
    covers: number[];    
    title: string;
  };