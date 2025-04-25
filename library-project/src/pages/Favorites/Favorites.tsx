import { NavBar } from "../../components/NavBar"
import { useFavoritesContext } from "../../hooks/useFavoriteContext"

export const Favorites = () => {
  const { favorites } = useFavoritesContext()
  console.log(favorites)
  return (
    <div>
      <NavBar />
    </div>
  )
}
