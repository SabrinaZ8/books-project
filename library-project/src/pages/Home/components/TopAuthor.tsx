import { useEffect, useState } from "react";
import axios from "axios";
import { AuthorInfo } from "../../../types";

const keyAuthors = [
    "OL27695A",
    "OL93286A",
    "OL21594A"
]

export const TopAuthor = () => {
  const [authors, setAuthors] = useState<AuthorInfo[]>([]);

  useEffect(() => {
    const fetchAuthors = async (key: string) => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/authors/${key}.json`
        );
        setAuthors((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    keyAuthors.map((author) => {
         fetchAuthors(author);
  })
  }, []);
console.log(authors)
  return (
    <div className="flex flex-col justify-center items-center bg-wheat">
      <div>
        <h2 className="title-h2">Top Autores</h2>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 gap-4 mb-10 mt-5 px-1 sm:x-4 w-3/4">
        {authors
          .map((author) => (
            <div
              className={`flex justify-start items-center p-2 cursor-pointer  bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <div className="flex items-center w-[170px] sm:w-[200px] h-[270px] sm:h-[300px] mr-4">
                <img
                  src={`https://covers.openlibrary.org/a/olid/${author.key.replace('/authors/', '')}-M.jpg`}
                  className={`object-cover min-w-[170px] w-[170px] sm:w-[200px] h-[300px]  `}
                />
              </div>
              <div>
                <h3>{author.name}</h3>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};
