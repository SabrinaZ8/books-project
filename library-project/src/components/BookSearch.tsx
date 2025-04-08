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
    <div className="flex mt-14 w-1/2 justify-center flex-col items-center">
      <form onSubmit={(e) => onSubmit(e)} className="flex w-4/5 justify-center">
        <select className="bg-orangered text-white rounded-sm">
          <option value="Drama">Drama</option>
        </select>
        <input
          type="text"
          name="book-search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="bg-white rounded-sm w-2/3 py-4 px-2 mx-3"
        />
        <button
          type="submit"
          aria-label="Procurar livros"
          className="bg-orangered p-2 rounded-sm"
        >
          <IoSearch className="text-white" />
        </button>
      </form>
    </div>
  );
};
