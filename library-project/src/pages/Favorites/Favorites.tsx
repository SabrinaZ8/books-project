import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { useFavoritesContext } from "../../hooks/useFavoriteContext";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

export const Favorites = () => {
  const { favorites, removeFavorite } = useFavoritesContext();
  console.log(favorites);
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="my-10">
        <h1 className="text-5xl lg:text-6xl font-semibold font-playfair tracking-widest text-center">
          Seus Favoritos
        </h1>
      </div>
      <div className="py-10 flex flex-wrap min-h-[calc(100vh-300px)]">
        {favorites.map((favorite) => (
          <Link to={`/book/${favorite.key.replace("/works/", "")}`} key={favorite.key}  className="mx-1 lg:mx-5 p-2 flex flex-1 w-full sm:max-w-[500px]">
            <div className="flex items-start justify-start">
              <img
                src={`https://covers.openlibrary.org/b/id/${
                  favorite.cover_i ? favorite.cover_i : favorite.covers?.[0]
                }-L.jpg`}
                alt=""
                className="w-[150px] min-w-[150px] 2xl:min-w-[200px] h-[250px] 2xl:h-[300px] shadow-md/70"
              />
            </div>
            <div className="flex flex-col flex-1 items-center justify-center px-2 bg-gainsboro rounded-r-lg h-[250px] 2xl:h-[300px]">
              <div className="">
                <h2 className="text-lg sm:text-xl font-semibold my-5">{favorite.title}</h2>
              </div>

              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={(e) => {
                    removeFavorite(favorite.key)
                    e.stopPropagation();
                    e.preventDefault()
                    toast.warn(`Livro ${favorite.title} removido dos favoritos!`)
                  }} 
                  className="flex items-center justify-between mr-10 font-semibold cursor-pointer"
                >
                  <AiFillDelete className="w-8 h-8 text-darkslategray cursor-pointer" />
                  Excluir
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};
