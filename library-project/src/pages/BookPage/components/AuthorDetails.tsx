import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Author } from "../type";

type AuthorErrorType = {
  hasError: boolean;
  message: string;
};

type authorKeyType = {
  authorKey: string;
  setAuthorName: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<AuthorErrorType>>;
};

export const AuthorDetails = ({
  authorKey,
  setAuthorName,
  setError,
}: authorKeyType) => {
  const [authorDetails, setAuthorDetails] = useState<Author | null>(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/authors/${authorKey}.json`
        );
        setAuthorDetails(response.data);
        setAuthorName(response.data.name);
        setError({ hasError: false, message: "" });

      } catch (e) {
        const error = e as AxiosError;
        if (error.response?.status === 404) {
          setError({
            hasError: true,
            message: "Autor inválido ou não encontrado.",
          });
        } else {
          setError({
            hasError: true,
            message: "Erro ao buscar dados do autor.",
          });
        }
      }
    };
    fetchAuthorDetails();
  }, [authorKey, setError, setAuthorName]);

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      <div>
        <h2 className="text-3xl my-3">{authorDetails?.name}</h2>
        {authorDetails?.photos && (
          <img
            src={`https://covers.openlibrary.org/a/id/${authorDetails.photos[0]}-L.jpg`}
            alt="Imagem do autor"
            className="w-[300px] sm:float-right sm:mx-2 object-cover"
          />
        )}
        <div>
          <p>
            {typeof authorDetails?.bio === "string"
              ? authorDetails.bio
              : authorDetails?.bio?.value}
          </p>
          <div className="inline-flex justify-start w-full md:w-1/2 my-4">
            <div className="author-infos-box">
              <h3>Aniversário</h3>
              <p>
                {authorDetails?.birth_date ? authorDetails?.birth_date : "-"}
              </p>
            </div>
            <div className="author-infos-box">
              <h3>Data da morte</h3>
              <p>
                {authorDetails?.death_date ? authorDetails?.death_date : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
