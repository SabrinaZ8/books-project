import { BookSearch } from "../../components/BookSearch";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { About } from "./components/About";
import { BooksChildren } from "./components/BooksChildren";
import { FindCategory } from "./components/FindCategory";
import { ShowCase } from "./components/ShowCase";
import { TopAuthor } from "./components/TopAuthor";
import { TopBooks } from "./components/TopBooks";
import imgBgMobile from "/images/bg-hero-mobile.webp"
import imgBgDekstop from "/images/bg-hero.webp"

export const Home = () => {
  return (
    <div>
      <NavBar />
      <section className="h-[calc(100vh-105px)] max-h-[900px] relative">
        <picture>
          <source
            media="(min-width: 641px)"
            srcSet={imgBgDekstop}
            type="image/jpeg"
          />
          <img
            src={imgBgMobile}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="relative flex flex-col justify-center items-center h-full text-center px-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-semibold mb-3">
            buscador de livros
          </h1>
          <p className="text-xl md:text-2xl"> As informações exibidas neste site são obtidas através da API da Open Library.</p>
          <p className="text-xl md:text-2xl underline decoration-6 underline-offset-6 decoration-wheat
">
            procure por livros, autores, categorias
          </p>
          <BookSearch />
          <div className="absolute bottom-4 right-4">
            <img
              src="/images/books-bg.webp"
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
      <section className="flex my-10 justify-between sm:p-5 flex-col-reverse xl:flex-row">
        <TopBooks />
        <TopAuthor />
      </section>
      <section>
        <About />
      </section>
      <img
        src="/svgs/wavesOpacity.svg"
        alt=""
        className="w-full max-sm:h-[50px] max-lg:h-[100px] bg-wheat rotate-180 object-cover"
      />
      <Footer />
    </div>
  );
};
