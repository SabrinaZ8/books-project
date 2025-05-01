import { BookSearch } from "../../components/BookSearch";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { About } from "./components/About";
import { BooksChildren } from "./components/BooksChildren";
import { FindCategory } from "./components/FindCategory";
import { ShowCase } from "./components/ShowCase";
import { TopAuthor } from "./components/TopAuthor";
import { TopBooks } from "./components/TopBooks";
import svgWaves from "../../assets/svgs/wavesOpacity.svg"


export const Home = () => {
  return (
    <div className="bg-[url()] bg-no-repeat bg-contain">
      <NavBar />

      <section className="h-[calc(100vh-105px)] max-h-[900px] bg-hero">
        <div className="relative flex flex-col justify-center items-center h-full text-center px-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-semibold mb-3">
            buscador de livros
          </h1>
          <p className="text-xl md:text-2xl">
            procure por livros, autores, categorias
          </p>
          <BookSearch />
          <div className="absolute bottom-4 right-4">
            <img
              src="../../../src/assets/background/teste.png"
              alt=""
              className="w-40 h-40 sm:h-80 sm:w-80 object-contain"
            />
          </div>
        </div>
      </section>
      <section className="">
        <ShowCase />
      </section>
      <section className="section-style h-[300px] lg:h-[400px]">
        <h2 className="title-h2">Encontre por categoria</h2>
        <FindCategory />
      </section>
      <section className="section-style">
        <BooksChildren />
      </section>
      <section className="flex my-10 justify-between p-5 flex-col-reverse xl:flex-row">
        <TopBooks />
        <TopAuthor />
      </section>
      <section>
        <About />
      </section>
      <img src={svgWaves} alt="" className="w-full bg-wheat rotate-180 object-cover" />
      <Footer />
    </div>
  );
};
