import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookSearch } from "../../components/BookSearch";
import { NavBar } from "../../components/NavBar";
import { Book } from "../../types";
import { useFavoritesContext } from "../../hooks/useFavoriteContext";
import { BsBookmarkStarFill } from "react-icons/bs";

export const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const subject = searchParams.get("subject");

  const { addFavorite } = useFavoritesContext();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let url = "";

        if (query && subject) {
          url = `https://openlibrary.org/search.json?q=subject:${subject}+${encodeURIComponent(
            query
          )}`;
        } else if (query) {
          url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
            query
          )}`;
        } else if (subject) {
          url = `https://openlibrary.org/search.json?subject=${encodeURIComponent(
            subject
          )}`;
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
      <NavBar />
      <div className="bg-[url(/images/bg-image.webp)] w-full bg-cover bg-center h-[200px]">
        <div className="bg-black/5 backdrop-blur-xs w-full h-full flex flex-col justify-center items-center p-4">
          <BookSearch />
        </div>
      </div>
      <i className="font-semibold text-sm text-dimgray mt-4 w-full px-4">
        Resultados para: {query && subject ? query + " & " + subject : query || subject } 
      </i>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-5 px-4">
        {books
          .filter((book) => book.cover_i)
          .map((book) => (
            <Link
              to={`/book/${book.key.replace("/works/", "")}`}
              key={book.key}
              state={{ book }}
            >
              <div
                key={book.key}
                className="shadow-xl p-2 cursor-pointer bg-white hover:bg-gainsboro transition-bg duration-300 relative w-full h-full"
              >
                <div className="absolute top-0 right-0 m-3 flex items-center cursor-pointer">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      addFavorite(book);
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    <BsBookmarkStarFill />
                  </button>
                </div>

                <div>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    className="shadow-md/70 w-[100px] h-[165px] object-cover"
                    alt={`Imagem da capa do livro ${book.title}`}
                    loading="lazy"
                  />
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm">{book.author_name}</p>
                </div>

                <div className="flex justify-end md:hidden">
                  <button
                    type="button"
                    className="bg-sandybrown tracking-widest p-1 rounded-md"
                  >
                    Ver Livro
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
