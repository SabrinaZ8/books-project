import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

export const ListBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${
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
  }, [query]);

  return (
    <div className="flex mt-14 w-1/2 justify-center flex-col items-center">
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
