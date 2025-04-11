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
  const subject = searchParams.get("subject");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let url = "";

        if (query && subject) {
          url = `https://openlibrary.org/search.json?q=subject:${subject}+${encodeURIComponent(query)}`;
        } else if (query) {
          url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
        } else if (subject) {
          url = `https://openlibrary.org/search.json?subject=${encodeURIComponent(subject)}`;
        }

        if (!url) return; //vim aqui dps e retornar um erro

        const response = await axios.get(url);
        setBooks(response.data.docs);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, [query, subject]);

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
    </div>
  );
};
