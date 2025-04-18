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

      <section className="h-[calc(100vh-105px)] bg-no-repeat bg-cover bg-[url(https://cdn.pixabay.com/photo/2021/06/24/11/18/background-6360866_1280.png)]">
        <div className="relative flex flex-col justify-center items-center h-full ">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-semibold">
            buscador de livros
          </h1>
          <p className="text-xl md:text-2xl">
            procure por livros, autores, categorias
          </p>
          <BookSearch />
          <div className="absolute bottom-4 right-4 bg-contain">
            <img
              src="../../../src/assets/background/teste.png"
              alt=""
              className="min-w-80 min-h-80 h-80 w-80 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="">
        <ShowCase />
      </section>
      <section className="section-style h-[300px] lg:h-[400px] ">
        <h2 className="title-h2">Encontre por categoria</h2>
        <FindCategory />
      </section>
      <section className="section-style px-4">
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
