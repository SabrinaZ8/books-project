import axios from "axios";
import { useEffect, useState } from "react";
import { Author } from "../type"

type authorKeyType = {
    authorKey: string;
    setAuthorName: React.Dispatch<React.SetStateAction<string>>;

  };

export const AuthorDetails = ({authorKey, setAuthorName}: authorKeyType) => {
  const [authorDetails, setAuthorDetails] = useState<Author | null>(null);

  useEffect(() => {
    const fetchAuthorDetails = async() => {
        try {
        const response = await axios.get(
            `https://openlibrary.org/authors/${authorKey}.json`
          );
          setAuthorDetails(response.data);
          setAuthorName(response.data.name)
    } catch(e) {
        console.log(e)
    }
    }
    fetchAuthorDetails()
  }, [authorKey, setAuthorName])

  return (
    <div className="flex flex-col justify-center items-center my-10 ">
    <div>
      <h2 className="text-3xl my-3">{authorDetails?.name}</h2>
      {authorDetails?.photos && (
        <img
          src={`https://covers.openlibrary.org/a/id/${authorDetails.photos[0]}-L.jpg`}
          alt="Imagem Author"
          className="w-[300px] float-right mx-2 object-cover"
        />
      )}
      <div>
        <p>
          {typeof authorDetails?.bio === "string"
            ? authorDetails.bio
            : authorDetails?.bio?.value}
        </p>
        <div className="inline-flex justify-start w-1/2 my-4">
          <div className="author-infos-box">
            <h3>Aniversário</h3>
            <p>{authorDetails?.birth_date}</p>
          </div>
          <div className="author-infos-box">
            <h3>Data da morte</h3>
            <p>{authorDetails?.death_date}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
