import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Book } from "../../../types";
import { useWidth } from "../../../hooks/useWidth";
import { Link } from "react-router-dom";

 export const ShowCase = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [translate, setTranslate] = useState(0);
  const [slideSize, setSlideSize] = useState(0)
  const [amountToShow, setAmountToShow] = useState(1)
  

  const width = useWidth()

  useEffect(() => {
    setTranslate(0)
    if(width < 640) {
      setSlideSize(246)
      setAmountToShow(1)
    } else if ( width < 768) {
      setSlideSize(492)
      setAmountToShow(2)
    } else if( width <= 1536) {
      setSlideSize(692)
      setAmountToShow(2)
    } else if(width > 1536) {
      setSlideSize(1038)
      setAmountToShow(3)
    }
  }, [width])

  function nextArrow() {
    const translateMax: number = (books.length / amountToShow) * slideSize - slideSize;

    if (translate < translateMax) {
      setTranslate((prev) => prev + slideSize);
    }
  }

  function previousArrow() {
    if (translate >= 0) {
      setTranslate((prev) => prev - slideSize);
    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=harry&limit=12`
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-200px)] p-1 sm:p-10 flex-col lg:flex-row">
      <div className="my-7 xl:p-16 2xl:p-20 max-lg:text-center">
        <h2 className="italic text-4xl sm:text-5xl md:text-6xl font-semibold font-playfair">Uma Viagem à Hogwarts</h2>
        <p className="font-playfair italic text-3xl">
          Relembre os livros que marcaram a infância de milhões.
        </p>
      </div>
      <div className={`flex justify-start overflow-hidden relative`}
      style={{
        minWidth: `${slideSize}px`,
        width: `${slideSize}px`,
      }}>
        <div className="absolute pointer-events-none z-10 inset-0 flex justify-between items-center ">
          <SlArrowLeft className="arrows-show" onClick={previousArrow} />
          <SlArrowRight className="arrows-show" onClick={nextArrow} />
        </div>
        <div
          className={`flex justify-center -translate-x-[${translate?.toString()}] transition-transform duration-300`}
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {books.map((book) => (
            <Link to={`/book/${book.key.replace('/works/', '')}`}
              key={book.key}
              className=" p-2 cursor-pointer transition-bg duration-300 w-[230px] min-h-[400px] md:w-[330px] md:min-h-[550px] mx-2"
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
                className="shadow-md/70 w-[230px] h-[330px] md:w-[330px] md:h-[500px] object-contain"
                loading="lazy"
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm">{book.author_name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
