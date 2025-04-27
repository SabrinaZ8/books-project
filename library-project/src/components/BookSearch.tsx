import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const BookSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subjectSelect')?.toString() || '';
    
    navigate(`/listbooks?q=${encodeURIComponent(inputSearch)}&subject=${encodeURIComponent(subject)}`);
  }

  return (
    <div className="flex mt-14 w-11/12 md:w-3/4 xl:w-1/2 justify-center flex-col items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex w-full justify-center"
      >
        <select className="bg-orangered text-white rounded-sm px-2" id="subjectSelect"  name="subjectSelect" aria-label="Categoria">
          <option value="">Padrão</option>
          <option value="drama">Drama</option>
          <option value="science">Ciência</option>
          <option value="fantasy">Fantasia</option>
          <option value="history">História</option>
          <option value="art">Arte</option>
          <option value="romance">Romance</option>
          <option value="biography">Biografia</option>
        </select>
        <input
          type="text"
          name="book-search"
          aria-label="Digite um livro"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="bg-white rounded-sm w-full 2xl:w-[600px] py-4 px-2 mx-3"
        />
        <button
          type="submit"
          aria-label="Procurar livros"
          className="bg-orangered px-4 rounded-sm"
        >
          <IoSearch className="text-white w-7 h-7" />
        </button>
      </form>
    </div>
  );
};
