import logo from "../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className="bg-darkslategray h-[55vh] sm:h-[30vh] flex justify-around items-center flex-col text-gainsboro">
      <div className="flex justify-around items-center w-full h-[90%] flex-wrap flex-col sm:flex-row">
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={logo}
            alt=""
            className="w-[100px] rounded-r-full rounded-l-full opacity-80"
          />
        </div>
        <div>
          <ul className="ul-footer">
            <li>Início</li>
            <li>Sobre</li>
            <li>Favoritos</li>
            <li>Open Library</li>
          </ul>
        </div>
        <div>
          <p className="font-playfair tracking-widest text-xl text-end mb-8">Procure por livros</p>
          <div className="flex items-center">
            <input type="text" placeholder="Digite aqui..." className="border-b-2 border-white w-2xs focus:outline-none" />
            <IoSearch className="w-8 h-8 bg-orangered p-1 rounded-md ml-3" />
          </div>
        </div>
      </div>
      <div className="w-full text-center ">
        <p>© 2025 Buscador Literário. Feito por Sabrina Souza.</p>
      </div>
    </div>
  );
};
