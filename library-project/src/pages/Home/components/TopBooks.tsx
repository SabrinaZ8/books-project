import { useEffect, useState } from "react";
import { Book } from "../../../types";
import axios from "axios";

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
    <div className="mx-5 w-full lg:w-[70%]">
      <div>
        <h2 className="title-h2">Top Livros</h2>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-4 mb-10 mt-5 px-1">
        {books
          .filter((book) => book.cover_i)
          .map((book) => (
            <div
              key={book.cover_edition_key}
              className={`flex justify-start items-center p-2 cursor-pointer  bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <div className="flex items-center min-w-[170px] w-[170px] sm:w-[200px] min-h-[200px] h-[270px] sm:h-[300px] mr-4">
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  className={`object-cover w-full h-full min-w-[170px] min-h-[200px]`}
                />
              </div>
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm">{book.author_name}</p>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};
