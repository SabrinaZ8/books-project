import { Link } from "react-router-dom";

export const FindCategory = () => {
  return (
    <div className="flex justify-evenly items-center h-1/2 lg:h-full overflow-x-auto">
      <Link to={"/listbooks?subject=fiction"} className="find-category">
        <h2>Ficção</h2>
      </Link>

      <Link to={"/listbooks?subject=romance"} className="find-category">
        <h2>Romance</h2>
      </Link>

      <Link to={"/listbooks?subject=technology"} className="find-category">
        <h2>Tecnologia</h2>
      </Link>
      
      <Link to={"/listbooks?subject=business"} className="find-category">
        <h2>Negócios</h2>
      </Link>
    </div>
  );
};
