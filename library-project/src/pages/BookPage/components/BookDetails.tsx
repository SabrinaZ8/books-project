import { useEffect, useState } from "react";
import { Book } from "../type"
import axios from "axios";
import { useFavoritesContext } from "../../../hooks/useFavoriteContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type BookDetailsProps = {
    setAuthorKey: React.Dispatch<React.SetStateAction<string>>;
  };

export const BookDetails = ({setAuthorKey }:BookDetailsProps) => {
    const [bookDetails, setBookDetails] = useState<Book | null>(null);
    const { addFavorite } = useFavoritesContext()
    const { keyParam } = useParams();


    useEffect(() => {
        const fetchBooksDeatails = async () => {
          try {
            const response = await axios.get(
              `https://openlibrary.org/works/${keyParam}.json?limit=10`
            );
            setBookDetails(response.data);
            console.log(response.data)
            setAuthorKey(response.data.authors[0].author.key.replace("/authors/",""))

          } catch (error) {
            console.error("Erro ao buscar detalhes do livro:", error);
          }
        };
    
        fetchBooksDeatails();
      }, [keyParam, setAuthorKey]);
      console.log(bookDetails)
    return (
      <div className="flex flex-row-reverse justify-end my-10">
        <div className="mx-5">
          <h2 className="text-5xl mb-10">{bookDetails?.title}</h2>
          <p>
            {typeof bookDetails?.description === "string"
              ? bookDetails.description
              : bookDetails?.description?.value}
          </p>
          <div className="my-5 bg-gainsboro inline-block p-5 text-center">
            <h3 className="text-xl font-bold">Primeira data de publicação</h3>
            <p>
              {bookDetails?.first_publish_date
                ? bookDetails?.first_publish_date
                : "-"}
            </p>
          </div>
        </div>

        <div>
          <div>
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetails?.covers[0]}-L.jpg`}
              className="shadow-md/70 min-w-[200px]"
              alt={`Imagem da capa do livro ${bookDetails?.title}`}
            />
          </div>

          <div className="w-full my-5">
            <button
              className="bg-sandybrown w-full p-2 font-semibold tracking-widest text-darkslategray"
              onClick={() => {
                if (bookDetails) {
                  addFavorite(bookDetails);
                  toast.success(`Livro ${bookDetails.title} adicionado aos favoritos!`);
                }
              }}
            >
              Favoritar
            </button>
          </div>
        </div>
      </div>
    );
}
