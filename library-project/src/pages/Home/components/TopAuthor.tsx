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
    const fetchAuthors = async () => {
      try {
        const responses = await Promise.all(
          keyAuthors.map(async (author) => {
            const res = await axios.get(`https://openlibrary.org/authors/${author}.json`);
            return res.data;
          })
        );
        setAuthors(responses);
      } catch (error) {
        console.error("Erro ao buscar autores:", error);
      }
    };
  
    fetchAuthors();
  }, []);

console.log(authors)
  return (
    <div className="h-1/2 bg-wheat p-10 rounded-lg">
      <div>
        <h2 className="title-h2">Top Autores</h2>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 gap-4 my-10 items-center">
        {authors
          .map((author) => (
            <div
              className={`flex justify-start items-center p-2 cursor-pointer  bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <div className="flex items-center fle mr-4">
                <img
                  src={`https://covers.openlibrary.org/a/olid/${author.key.replace('/authors/', '')}-M.jpg`}
                  className={`w-[200px] h-[200px] min-w-[200px] object-cover`}
                />
              </div>
              <div>
                <h3>{author.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
