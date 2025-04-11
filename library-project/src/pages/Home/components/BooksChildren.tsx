import axios from "axios";
import { useEffect, useState } from "react";
import { Book } from "../../../types";

export const BooksChildren = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=chind`
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-5 px-4">
      {books
        .filter((book) => book.cover_i)
        .map((book) => (
          <div
            key={book.cover_edition_key}
            className="shadow-xl p-2 cursor-pointer bg-white hover:bg-gainsboro transition-bg duration-300"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              width="100"
              className="shadow-md/70"
            />
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm">{book.author_name}</p>
          </div>
        ))}
    </div>
  );
};
