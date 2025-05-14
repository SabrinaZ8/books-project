import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { BookDetails } from "./components/BookDetails";
import { AuthorDetails } from "./components/AuthorDetails";
import { WorksEditions } from "./components/WorksEditions";
import { BooksAuthor } from "./components/BooksAuthor";
import { RiErrorWarningFill } from "react-icons/ri";

export const BookPage = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorKey, setAuthorKey] = useState<string | null>(null);
  const [error, setError] =  useState({ hasError: false, message: "" });
  const { keyParam } = useParams();

  return (
    <div className="">
      <NavBar />
      {error.hasError ? (
        <div className="min-h-[calc(100vh-105px)] flex justify-center items-center p-5 bg-gainsboro">
          <RiErrorWarningFill className="w-10 h-10 mx-2 text-red-400" />
          <h2 className="text-3xl md:text-5xl">{error.message}</h2>
        </div>
       
      ) : (<div className="p-3 sm:p-10">
        {keyParam ? (
          <BookDetails setAuthorKey={setAuthorKey} setError={setError}/>
        ) : (
          <p>Livro não encontrado</p>
        )}

        <div>
          <h2 className="text-xl tracking-widest">Author</h2>
          <hr className="text-gray-300" />
        </div>

        {authorKey !== null ? (
          <AuthorDetails
            key={authorKey}
            authorKey={authorKey}
            setAuthorName={setAuthorName}
            setError={setError}

          />
        ) : (
          <p>Autor não encontrado</p>
        )}
        <div>
          <h2 className="text-xl tracking-widest">Mais edições do livro</h2>
          <hr className="text-gray-300" />
        </div>

        {keyParam ? <WorksEditions /> : "Edições não encontradas"}

        <div>
          <h2 className="text-xl tracking-widest">
            Mais livros de {authorName}
          </h2>
          <hr className="text-gray-300" />
        </div>

        {authorKey !== null ? (
          <BooksAuthor key={authorKey} authorKey={authorKey} />
        ) : (
          <p>Livros não encontrados</p>
        )}
      </div>)}
      
    </div>
  );
};
