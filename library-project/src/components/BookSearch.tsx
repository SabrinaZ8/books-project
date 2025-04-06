import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";


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

export const BookSearch = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [encodeURI, setEncodeURI] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEncodeURI(encodeURIComponent(inputSearch))
    setIsSubmit(!isSubmit)
    console.log(e)
}

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURI}&key=${
            import.meta.env.VITE_GOOGLE_BOOKS_API
          }`
        );
        setBooks(response.data.items || []);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, [encodeURI]);
  return (
    <div className="flex mt-14 w-1/2 justify-center flex-col items-center">
      <form onSubmit={(e) => onSubmit(e)} className="flex w-4/5 ">
        <select>
          <option value="Drama">Drama</option>
        </select>
        <input
          type="text"
          name="book-search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="bg-gainsboro rounded-sm w-4/5 px-2 mx-3"
        />
        <button type="submit" aria-label="Procurar livros" className="bg-orangered p-2 rounded-sm">
          <IoSearch className="text-white" />
        </button>
      </form>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                width="100"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
