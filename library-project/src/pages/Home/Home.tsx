import { BookSearch } from "../../components/BookSearch";
import { NavBar } from "../../components/NavBar";

export const Home = () => {
  return (
    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-400 via-orange-200 to-red-300">
      <div className="bg-hero"></div>
      <NavBar />
      <section className="flex flex-col justify-center items-center font-georgia mt-20">
        <h1 className="text-5xl">buscador de livros</h1>
        <p>procure por livros, autores, categorias</p>
        <BookSearch />
      </section>
      <section>
        
      </section>
    </div>
  );
};
