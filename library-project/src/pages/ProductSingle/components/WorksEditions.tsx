import axios from "axios"
import { useEffect, useState } from "react"


type WorksEditionsProp = {
    keyParam: string;
  };
  type EditionsType = {
    covers: number[];
  };
export const WorksEditions = ({ keyParam }:WorksEditionsProp) => {

    const [worksEditions, setWorksEditions] = useState<EditionsType[]>([]);
    
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
    <div className="flex my-10">
    {worksEditions?.map((edition) => (
      <div>
        {edition.covers?.[0] && (
          <img
            src={`https://covers.openlibrary.org/b/id/${edition.covers[0]}-M.jpg`}
            className="w-[200px] h-[300px] object-cover mx-3"
          />
        )}
      </div>
    ))}
  </div>
  )
}
