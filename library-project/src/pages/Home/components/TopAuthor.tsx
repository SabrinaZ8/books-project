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

  return (
    <div className="h-1/2 bg-wheat flex flex-col justify-center items-center py-10 px-3 xl:px-10 rounded-lg w-full xl:w-[30%]">
      <div>
        <h2 className="title-h2">Top Autores</h2>
      </div>
      <div className="flex flex-col md:flex-row xl:flex-col my-10 items-start gap-4">
        {authors
          .map((author) => (
            <div
            key={author.key}
              className={`flex justify-start items-center p-2 cursor-pointer w-full max-w-[400px]  bg-white hover:bg-gainsboro transition-bg duration-300`}
            >
              <div className="flex items-center fle mr-4">
                <img
                  src={`https://covers.openlibrary.org/a/olid/${author.key.replace('/authors/', '')}-M.jpg`}
                  className={`w-28 h-28 min-w-28 lg:w-[150px] lg:h-[150px] lg:min-w-[150px] object-cover`}
                  alt={`Imagem de ${author.name}`}
                  loading="lazy"
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


