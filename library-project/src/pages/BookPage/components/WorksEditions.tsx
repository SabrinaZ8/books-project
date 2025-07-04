import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { EditionsType } from "../type";

export const WorksEditions = () => {

    const [worksEditions, setWorksEditions] = useState<EditionsType[]>([]);
    const { keyParam} = useParams()
    useEffect(() => {
       const fetchWorksEditions = async() => {
        try{
            const response = await axios.get(
                `https://openlibrary.org/works/${keyParam}/editions.json?limit=20`
              );
              setWorksEditions(response.data.entries);
        }
        catch(e) {
            console.log(e)
        }
       }
       fetchWorksEditions()
    }, [keyParam])

  return (
    <div className="flex my-10 overflow-x-scroll py-4">
    {worksEditions?.map((edition) => (
      <div>
        {edition.covers?.[0] && (
          <img
            src={`https://covers.openlibrary.org/b/id/${edition.covers[0]}-M.jpg`}
            className="min-w-[200px] w-[200px] h-[300px] object-cover mx-3"
            alt={`Imagem de capa da edição ${edition.title}`}
          />
        )}
      </div>
    ))}
  </div>
  )
}
