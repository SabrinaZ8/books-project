import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { BookDetails } from "./components/BookDetails";
import { AuthorDetails } from "./components/AuthorDetails";
import { WorksEditions } from "./components/WorksEditions";
import { BooksAuthor } from "./components/BooksAuthor";

export const BookPage = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorKey, setAuthorKey] = useState<string | null>(null)
  const { keyParam } = useParams();
  
  return (
    <div className="">
      <NavBar />
      <div className="p-3 sm:p-10">

      {keyParam ? <BookDetails setAuthorKey={setAuthorKey} /> : <p>Livro não encontrado</p>}

        <div>
          <h2 className="text-xl tracking-widest">Author</h2>
          <hr className="text-gray-300" />
        </div>


{authorKey !== null ? (
  <AuthorDetails key={authorKey} authorKey={authorKey} setAuthorName={setAuthorName} />
) : (
  <p>Autor não encontrado</p>
)}
        <div>
          <h2 className="text-xl tracking-widest">
            Mais edições do livro
          </h2>
          <hr className="text-gray-300" />
        </div>

        { keyParam ? <WorksEditions /> : "Edições não encontradas"}

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
      </div>
    </div>
  );
};
