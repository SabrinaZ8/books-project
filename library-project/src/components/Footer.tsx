import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/listbooks?q=${encodeURIComponent(inputSearch)}`);
  }
  
  return (
    <div className="bg-darkslategray max-sm:min-h-[70vh] max-lg:min-h-[50vh] sm:h-[30vh] flex justify-around items-center flex-col text-gainsboro">
      <div className="flex justify-around items-center w-full h-[90%] flex-wrap flex-col sm:flex-row">
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="w-[100px] rounded-r-full rounded-l-full opacity-80"
          />
        </div>
        <div className="text-center">
          <ul className="ul-footer">
            <li>Início</li>
            <li>Sobre</li>
            <li>Favoritos</li>
            <li>Open Library</li>
          </ul>
        </div>
        <div className="my-10 relative">
          <p className="font-playfair tracking-widest text-xl mb-5 text-start sm:text-end">Procure por livros</p>
          <div className="flex items-center">
            <input 
              type="text"
              name="book-search"
              aria-label="Digite um livro"
              placeholder="Digite aqui..."
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              className="border-b-2 border-white w-2xs focus:outline-none" 
            />
            <IoSearch className="w-8 h-8 bg-orangered p-1 rounded-md ml-3" onClick={handleSearch} />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <p>© 2025 Buscador Literário. Feito por Sabrina Souza.</p>
      </div>
    </div>
  );
};
