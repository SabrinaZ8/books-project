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
