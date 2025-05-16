import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Book } from "../../../types";
import { Link } from "react-router-dom";

export const BooksChildren = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState<number | null>(null);
  const elementoRef = useRef<HTMLDivElement>(null);

  function arrowNext() {
    setCount((prev) => prev + 1);
  }

  function arrowBack() {
    setCount((prev) => prev - 1);
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleResize = async () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (elementoRef.current) {
          const width = elementoRef.current.getBoundingClientRect().width;
          if (width < 640) {
            setLimit(Math.floor(width / 170));
          } else {
            setLimit(Math.floor(width / 200) * 2);
          }
        }
      }, 500);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // chama ao montar

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (limit === null) return;
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=children&page=${count}&limit=${limit}`
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, [count, limit]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="title-h2">Livros para crianças</h2>
        <div className="flex items-center">
          <SlArrowLeft className="arrows-show-more" onClick={arrowBack} />
          <SlArrowRight className="arrows-show-more" onClick={arrowNext} />
        </div>
      </div>
      <div
        className="grid max-sm:grid-rows-1 grid-rows-2 grid-flow-col gap-1 sm:gap-4 mb-10 mt-5 px-1 sm:x-4 overflow-hidden"
        ref={elementoRef}
      >
        {books
          .filter((book) => book.cover_i)
          .map((book) => (
            <Link to={`/book/${book.key.replace('/works/', '')}`} key={book.key}>
            <div
              className={`p-2 cursor-pointer w-[170px] sm:w-[200px] min-h-[350px] bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                className={` object-contain object-center shadow-md/70`}
                alt={`Imagem da capa do livro ${book.title}`}
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm">{book.author_name[0]}</p>
            </div>
            </Link>
            
          ))}
      </div>
    </div>
  );
};
