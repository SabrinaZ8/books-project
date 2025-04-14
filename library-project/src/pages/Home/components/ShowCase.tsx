import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Book } from "../../../types";

export const ShowCase = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [translate, setTranslate] = useState(0);

  function nextArrow() {
    const amountToShow = 3
    const translateMax: number = (books.length / amountToShow * 1098) - 1098
    console.log("foi aqui")
    if(translate < translateMax) { //2196
    setTranslate(prev => prev + 1098)
    console.log("Clicou no nextArrow", translate);
    }
  }

  function previousArrow() {
    if(translate >= 0) {
    setTranslate(prev => prev - 1098)
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

  return (
    <div className="flex justify-center relative h-[calc(100vh-200px)]">
      <div className="flex justify-start w-[1098px] overflow-hidden">
        <div className="absolute z-10 inset-0 flex justify-between items-center">
          <SlArrowLeft className="translate-x-72" onClick={previousArrow}/>
          <SlArrowRight className="-translate-x-72" onClick={nextArrow}/>
        </div>
        <div className={`flex justify-center items-center -translate-x-[${translate?.toString()}] transition-transform duration-300`}
         style={{ transform: `translateX(-${translate}px)` }}>
          {books.map((book) => (
            <div
              key={book.cover_edition_key}
              className=" p-2 cursor-pointer transition-bg duration-300 w-[350px] h-[550px] mx-2"
            >
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                  className="shadow-md/70 w-[350px] h-[500px] object-contain"	
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
