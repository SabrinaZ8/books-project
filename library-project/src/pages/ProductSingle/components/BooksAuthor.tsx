import axios from "axios";
import { useEffect, useState } from "react";

type AuthorKeyProp = {
  authorKey: string;
};

type BooksAuthorType = {
  key: string;
  title: string;
  covers: number[];
};

export const BooksAuthor = ({ authorKey }: AuthorKeyProp) => {
  const [booksAuthor, setBooksAuthor] = useState<BooksAuthorType[]>([]);

  useEffect(() => {
    const fetchBooksAuthor = async () => {
      const response = await axios.get(
        `https://openlibrary.org/authors/${authorKey}/works.json`
      );
      setBooksAuthor(response.data.entries);
    };
    fetchBooksAuthor();
  });
  return (
    <div className="flex my-10 overflow-x-scroll">
      {booksAuthor?.map((book) => (
        <div>
          <div>
            {book.covers?.[0] && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
                className="min-w-[200px] w-[200px] h-[300px] object-cover mx-3"
                alt={`Imagem do livro ${book.title}`}
              />
            )}
          </div>
          <h3>{book.covers?.[0] && book.title}</h3>
        </div>
      ))}
    </div>
  );
};
