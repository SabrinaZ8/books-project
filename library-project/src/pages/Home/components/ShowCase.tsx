import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export const ShowCase = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [translate, setTranslate] = useState(0);

  function nextArrow() {
    if(translate <= 1296) {
    setTranslate(prev => prev + 648)
    console.log("Clicou no nextArrow", translate);
    }
  }
  function previousArrow() {
    if(translate >= 0) {
    setTranslate(prev => prev - 648)
    }
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=bestsellers&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API
          }`
        );
        console.log(response.data.items);
        setBooks(response.data.items);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="flex justify-center relative">
      <div className="flex justify-start w-[648px] overflow-y-hidden">
        <div className="absolute z-10 inset-0 flex justify-between items-center">
          <SlArrowLeft className="translate-x-72" onClick={previousArrow}/>
          <SlArrowRight className="-translate-x-72" onClick={nextArrow}/>
        </div>
        <div className={`flex justify-center items-center -translate-x-[${translate?.toString()}] transition-transform duration-300`}
         style={{ transform: `translateX(-${translate}px)` }}>
          {books.map((book) => (
            <div
              key={book.id}
              className=" p-2 cursor-pointer transition-bg duration-300 w-[200px] h-[360px] mx-2"
            >
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="shadow-md/70 w-[200px] h-[300px] object-cover"	
                />
              )}
              <h3 className="font-semibold">{book.volumeInfo.title}</h3>
              <p className="text-sm">{book.volumeInfo.authors?.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
