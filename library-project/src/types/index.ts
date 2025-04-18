export interface Book {
  cover_edition_key: string;
  title: string;
  author_name: string[];
  cover_i: number;
}

export interface AuthorInfo {
  key: string;
  name: string;
  totalWorks: number;
  imageUrl: string;
  birth_date: string;
  death_date: string;
  topSubjects: string[];
  topWork: string;
  work_count: number;
}
