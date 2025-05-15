import axios, { AxiosError } from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookSearch } from "../../components/BookSearch";
import { NavBar } from "../../components/NavBar";
import { Book } from "../../types";
import { useFavoritesContext } from "../../hooks/useFavoriteContext";
import { BsBookmarkStarFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { RiErrorWarningFill } from "react-icons/ri";

type ErrorType = {
  hasError: boolean;
  message: string;
};

export const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const subject = searchParams.get("subject");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState<ErrorType>({ hasError: false, message: '' });

  const limit = 20; 
  const { addFavorite } = useFavoritesContext();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let url = "";

        if (query && subject) {
          url = `https://openlibrary.org/search.json?q=subject:${subject}+${encodeURIComponent(
            query
          )}&page=${page}&limit=${limit}`;
        } else if (query) {
          url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
            query
          )}&page=${page}&limit=${limit}`;
        } else if (subject) {
          url = `https://openlibrary.org/search.json?subject=${encodeURIComponent(
            subject
          )}&page=${page}&limit=${limit}`;
        }

        if (!url) return; //vim aqui dps e retornar um erro

        const response = await axios.get(url);

        if (response.data.docs.length === 0) {
          setError({
            hasError: true,
            message: "Nenhum livro encontrado.",
          });
          return;
        }

        setBooks((prev) => {
          const currentIds = new Set(prev.map((book) => book.key));
          const newBooks = response.data.docs.filter(
            (book: Book) => !currentIds.has(book.key)
          );
          return [...prev, ...newBooks];
        });
        setTotalResults(response.data.numFound);
      } catch (e) {
        const error = e as AxiosError;
        if (error.response?.status === 404) {
          setError({
            hasError: true,
            message: "Busca inválido ou nenhum livro encontrado.",
          });
        } else {
          setError({
            hasError: true,
            message: "Erro ao buscar dados dos livros.",
          });
        }
      }
    };

    fetchBooks();
  }, [page, query, subject]);

  useEffect(() => {
      setBooks([])
      setPage(1);
  }, [query, subject])

  const hasMore = books.length < totalResults;


  return (
    <div>
      <NavBar />
      <div className="bg-[url(/images/bg-image.webp)] w-full bg-cover bg-center h-[200px] shadow-lg/30">
        <div className="bg-black/5 backdrop-blur-xs w-full h-full flex flex-col justify-center items-center p-4">
          <BookSearch />
        </div>
      </div>
      <i className="inline-flex font-semibold text-sm text-dimgray w-full m-4">
        Resultados para: {query && subject ? query + " & " + subject : query || subject } 
      </i>
      {error.hasError ? (
        <div className="flex justify-center items-center p-5">
          <RiErrorWarningFill className="w-10 h-10 mx-2 text-red-400" />
          <h2 className="text-3xl md:text-5xl">{error.message}</h2>
        </div>
      ) : (
        
      <div className="flex flex-col justify-center items-center">
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
                className="shadow-xl p-2 cursor-pointer bg-white hover:bg-gainsboro transition-bg duration-300 relative w-full h-full"
              >
                <div className="absolute top-0 right-0 m-3 flex items-center cursor-pointer">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={(e) => {
                      addFavorite(book);
                      toast.success(`Livro ${book.title} adicionado aos favoritos!`);
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
      
      <button 
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!hasMore}
        className={`px-5 py-2 hover:brightness-150 rounded-md mb-20 cursor-pointer ${hasMore ? "bg-orangered text-white" : "bg-gray-400 text-black"}`}>
        Ver mais
      </button>
      </div>
      )}
      
    </div>
  );
};
