import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Book } from "../../../types";
import { useWidth } from "../../../hooks/useWidth";

export const ShowCase = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [translate, setTranslate] = useState(0);
  const [slideSize, setSlideSize] = useState(1038)

  const width = useWidth()

  useEffect(() => {
    if(width < 768) {
      setSlideSize(346)
    } else if( width <= 1536) {
      setSlideSize(692 )
    } else if(width > 1536) {
      setSlideSize(1038)
    }
  }, [width])

  function nextArrow() {
    const amountToShow = 3;
    const translateMax: number = (books.length / amountToShow) * slideSize - slideSize;

    if (translate < translateMax) {
      setTranslate((prev) => prev + slideSize);
      console.log("Clicou no nextArrow", translate);
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
        console.log(response);
        setBooks(response.data.docs);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, []);

  console.log(slideSize)

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] p-1 sm:p-10 flex-col lg:flex-row">
      <div className="my-7 max-lg:text-center">
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
        <div className="absolute z-10 inset-0 flex justify-between items-center ">
          <SlArrowLeft className="arrows-show" onClick={previousArrow} />
          <SlArrowRight className="arrows-show" onClick={nextArrow} />
        </div>
        <div
          className={`flex justify-center items-center -translate-x-[${translate?.toString()}] transition-transform duration-300`}
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {books.map((book) => (
            <div
              key={book.key}
              className=" p-2 cursor-pointer transition-bg duration-300 w-[330px] h-[550px] mx-2"
            >
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
                className="shadow-md/70 w-[330px] h-[500px] object-contain"
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm">{book.author_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
