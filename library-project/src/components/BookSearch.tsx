import { FormEvent, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const BookSearch = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/listbooks?q=${encodeURIComponent(inputSearch)}`);
  }

  return (
    <div className="flex mt-14 w-11/12 md:w-3/4 xl:w-1/2 justify-center flex-col items-center">
      <form onSubmit={(e) => onSubmit(e)} className="flex w-full justify-center">
        <select className="bg-orangered text-white rounded-sm px-2">
          <option value="Drama">Drama</option>
        </select>
        <input
          type="text"
          name="book-search"
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
