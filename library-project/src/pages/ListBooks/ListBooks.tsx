import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookSearch } from "../../components/BookSearch";
import { NavBar } from "../../components/NavBar";
import { Book } from "../../types";	


export const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API
          }`
        );
        setBooks(response.data.items || []);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-[url(../../../src/assets/background/bg-image.webp)] w-full bg-cover bg-center">
        <div className="bg-black/5 backdrop-blur-xs w-full flex flex-col justify-center items-center p-4">
          <NavBar />
          <BookSearch />
        </div>
      </div>
      <i className="font-semibold text-sm text-dimgray mt-4 w-full px-4">
        Resultados para: {query}
      </i>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-5 px-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="shadow-xl p-2 cursor-pointer bg-white hover:bg-gainsboro transition-bg duration-300"
          >
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                width="100"
                className="shadow-md/70"
              />
            )}
            <h3 className="font-semibold">{book.volumeInfo.title}</h3>
            <p className="text-sm">{book.volumeInfo.authors?.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
