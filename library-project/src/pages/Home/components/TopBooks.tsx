import { useEffect, useState } from "react";
import { Book } from "../../../types";
import axios from "axios";
import { Link } from "react-router-dom";

export const TopBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=*&sort=editions&limit=6`
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="mx-1 p-1 sm:mx-5 w-full xl:w-[70%] my-5">
      <div>
        <h2 className="title-h2" translate="no">Top Livros</h2>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-4 mb-5 sm:mb-10 mt-5 px-1">
        {books
          .filter((book) => book.cover_i)
          .map((book) => (
            <Link to={`/book/${book.key.replace('/works/', '')}`} key={book.key}>
            <div
              className={`flex max-sm:flex-col justify-start items-center p-2 cursor-pointer  bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <div className="flex items-center min-w-[150px] w-[150px]  min-h-[250px] h-[250px] sm:w-[200px] sm:h-[300px] mr-4">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  className={`object-cover w-full h-full min-w-[150px] min-h-[250px]`}
                  alt={`Imagem da obra ${book.title}`}
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm">{book.author_name}</p>
              </div>
            </div>
            </Link>
            
          ))}
      </div>
    </div>
  );
};
