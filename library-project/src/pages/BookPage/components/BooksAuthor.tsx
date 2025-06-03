import axios from "axios";
import { useEffect, useState } from "react";
import { BooksAuthorType } from "../type";
import { AuthorKeyProp } from "../type";

export const BooksAuthor = ({ authorKey }: AuthorKeyProp) => {
  const [booksAuthor, setBooksAuthor] = useState<BooksAuthorType[]>([]);

  useEffect(() => {
      if (!authorKey) return;

  const fetchBooksAuthor = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/authors/${authorKey}/works.json`
      );
      setBooksAuthor(response.data.entries);
    } catch (error) {
      console.error("Erro ao buscar livros do autor:", error);
    }
  };

  fetchBooksAuthor();
}, [authorKey]);

  return (
    <div className="flex my-10 overflow-x-scroll py-4">
      {booksAuthor?.map((book) => (
        <div key={book.key}>
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
