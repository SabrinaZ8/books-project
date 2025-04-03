import { useEffect, useRef, useState } from "react";
import axios from "axios";

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
export const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const fetched = useRef(false);
  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${import.meta.env.VITE_GOOGLE_BOOKS_API}`
        );
        setBooks(response.data.items || []);
        console.log(response.data)
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Livros sobre Harry Potter</h1>
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

