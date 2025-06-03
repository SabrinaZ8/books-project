import { useEffect, useState } from "react";
import { Book } from "../type";
import axios, { AxiosError } from "axios";
import { useFavoritesContext } from "../../../hooks/useFavoriteContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BookDetailsProps } from "../type";

export const BookDetails = ({ setAuthorKey, setError }: BookDetailsProps) => {
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const { addFavorite } = useFavoritesContext();
  const { keyParam } = useParams();

  useEffect(() => {
    const fetchBooksDeatails = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/works/${keyParam}.json`
        );
        setBookDetails(response.data);
        setAuthorKey(
          response.data.authors[0].author.key.replace("/authors/", "")
        );
      } catch (e) {
        const error = e as AxiosError;
        if (error.response?.status === 404) {
          setError({
            hasError: true,
            message: "Livro não encontrado.",
          });
        } else {
          setError({
            hasError: true,
            message: "Ocorreu um erro ao carregar os dados do livro. Tente novamente mais tarde.",
          });
        }
      }
    };

    fetchBooksDeatails();
  }, [keyParam, setError, setAuthorKey]);

  return (
    <div className="flex flex-row-reverse justify-end my-10 max-md:flex-col">
      <div className="sm:mx-5">
        <h2 className="text-4xl md:text-5xl mb-10 max-md:text-center">
          {bookDetails?.title}
        </h2>
        <p>
          {typeof bookDetails?.description === "string"
            ? bookDetails.description
            : bookDetails?.description?.value}
        </p>
        <div className="flex items-center justify-center my-5">
          <div className=" bg-gainsboro inline-block p-5 text-center">
            <h3 className="text-xl font-bold">Primeira data de publicação</h3>
            <p>
              {bookDetails?.first_publish_date
                ? bookDetails?.first_publish_date
                : "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          {bookDetails?.covers && bookDetails.covers[0] && (
            <img
              src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
              className="shadow-md/70 w-[200px] min-w-[200px]"
              alt={`Imagem da capa do livro ${bookDetails.title}`}
            />
          )}
        </div>

        <div className="w-[200px] my-5">
          <button
            className="bg-sandybrown w-full p-2 font-semibold tracking-widest text-darkslategray"
            onClick={() => {
              if (bookDetails) {
                addFavorite(bookDetails);
                toast.success(
                  `Livro ${bookDetails.title} adicionado aos favoritos!`
                );
              }
            }}
          >
            Favoritar
          </button>
        </div>
      </div>
    </div>
  );
};
