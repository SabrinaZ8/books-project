import { BookSearch } from "../../components/BookSearch";
import { NavBar } from "../../components/NavBar";
import { FindCategory } from "./components/FindCategory";
import { ShowCase } from "./components/ShowCase";

export const Home = () => {
  return (
    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-400 via-orange-200 to-red-300">
      <div className="bg-hero"></div>
      <NavBar />
      <section className="flex flex-col justify-center items-center font-georgia h-[70%]">
        <h1 className="text-[40px] sm:text-5xl md:text-6xl">buscador de livros</h1>
        <p className="text-xl md:text-2xl">procure por livros, autores, categorias</p>
        <BookSearch />
      </section>
      <section>
        <ShowCase />
      </section>
      <section className="section-style h-[300px] lg:h-[400px] ">
        <h2 className="title-h2">Encontre por categoria</h2>
        <FindCategory />
      </section>
      <section className="section-style px-4">
        <h2 className="title-h2">Books for children</h2>
      </section>
    </div>
  );
};
