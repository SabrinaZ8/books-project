import { NavBar } from "../../components/NavBar"
import { useFavoritesContext } from "../../hooks/useFavoriteContext"

export const Favorites = () => {
  const { favorites } = useFavoritesContext()
  console.log(favorites)
  return (
    <div>
      <NavBar />
      <div className="my-20 ml-[60px]">
        <h1 className="text-6xl font-semibold font-playfair tracking-widest">Seus Favoritos</h1>
      </div>
      <div className="p-10 flex flex-wrap">
        {favorites.map((favorite) => (
          <div className="mx-5">
            <div className="flex flex-col items-center justify-center">              
              <img 
                src={`https://covers.openlibrary.org/b/id/${favorite.cover_i ? favorite.cover_i : favorite.covers?.[0]}-L.jpg`} 
                alt="" 
                className="shadow-md/70" />
              <h2 className="text-xl font-semibold my-5">{favorite.title}</h2>
              <h3>{favorite.author_name ? favorite.author_name : favorite.authors?.map((author) => author.name).join(", ")}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
