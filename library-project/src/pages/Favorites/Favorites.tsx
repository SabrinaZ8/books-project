import { NavBar } from "../../components/NavBar";
import { useFavoritesContext } from "../../hooks/useFavoriteContext";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";


export const Favorites = () => {
  const { favorites, removeFavorite } = useFavoritesContext();
  console.log(favorites);
  return (
    <div>
      <NavBar />
      <div className="my-20 ml-[60px]">
        <h1 className="text-6xl font-semibold font-playfair tracking-widest">
          Seus Favoritos
        </h1>
      </div>
      <div className="p-10 flex flex-wrap">
        {favorites.map((favorite) => (
          <div className="mx-5 p-2">
            <div className="flex flex-col items-start justify-start">
              <img
                src={`https://covers.openlibrary.org/b/id/${
                  favorite.cover_i ? favorite.cover_i : favorite.covers?.[0]
                }-L.jpg`}
                alt=""
                className="shadow-md/70"
              />
              <h2 className="text-xl font-semibold my-5">{favorite.title}</h2>
              <h3>
                {favorite.author_name
                  ? favorite.author_name
                  : favorite.authors?.map((author) => author.name).join(", ")}
              </h3>
            </div>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => removeFavorite(favorite.key)}
                className="flex items-center justify-between mr-10 font-semibold"
              >
                <AiFillDelete className="w-8 h-8" />
                Excluir
              </button>
              <button className="">
                <FaRegEye className="w-8 h-8"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
