import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { BookDetails } from "./components/BookDetails";
import { AuthorDetails } from "./components/AuthorDetails";
import { WorksEditions } from "./components/WorksEditions";

export const ProductSingle = () => {
  const [authorName, setAuthorName] = useState("");
  const [authorKey, setAuthorKey] = useState("")
  const { key } = useParams<{ key: string }>();

  return (
    <div className="">
      <NavBar />
      <div className="p-10">

      {key ? <BookDetails keyParam={key} setAuthorKey={setAuthorKey} /> : <p>Livro não encontrado</p>}

        <div>
          <h2 className="text-xl tracking-widest">Author</h2>
          <hr className="text-gray-300" />
        </div>

        <AuthorDetails authorKey={authorKey} setAuthorName={setAuthorName}/>

        <div>
          <h2 className="text-xl tracking-widest">
            Mais edições do livro
          </h2>
          <hr className="text-gray-300" />
        </div>

        { key ? <WorksEditions keyParam={key} /> : ""}

        <div>
          <h2 className="text-xl tracking-widest">
            Mais livros de {authorName}
          </h2>
          <hr className="text-gray-300" />
        </div>

      </div>
    </div>
  );
};
