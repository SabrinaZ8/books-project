import { Link } from "react-router-dom";

export const FindCategory = () => {
  return (
    <div className="flex justify-evenly items-center h-full overflow-x-auto">
      <div className="find-category">
        <Link to={"/listbooks?subject=fiction"}>
          <h2>Ficção</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?subject=romance"}>
          <h2>Romance</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?subject=technology"}>
          <h2>Tecnologia</h2>
        </Link>
      </div>
      <div className="find-category">
        <Link to={"/listbooks?subject=business"}>
          <h2>Negócios</h2>
        </Link>
      </div>
    </div>
  );
};
