import { Link } from "react-router-dom";

export const FindCategory = () => {
  return (
    <div className="flex justify-evenly items-center p-0 lg:p-10 m-2 lg:m-5 h-full overflow-x-auto">
      <div className="find-category">
        <Link to={"/listbooks?q=subject:fiction"}>
          <h2>Ficção</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?q=subject:romance"}>
          <h2>Romance</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?q=subject:tecnologia"}>
          <h2>Tecnologia</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?q=subject:negocios"}>
          <h2>Negócios</h2>
        </Link>
      </div>
    </div>
  );
};
