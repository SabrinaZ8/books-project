import { BiSolidBookHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex w-full justify-between items-center p-2 sm:p-10 h-[105px] bg-darkslategray text-white tracking-widest">
     
      <NavLink to="/">
        <div>
          <img
            src="/images/logo.webp"
            alt="Logo"
            className="w-[70px] h-[70px] min-w-[70px] rounded-full"
          />
        </div>
      </NavLink>

      <div className="flex items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <div className="flex px-10 items-center cursor-pointer">
            <p className="leading-none">Início</p>
          </div>
        </NavLink>

        <NavLink to="/favorites"  className={({ isActive }) => isActive ? 'active' : ''}>
        <div className="flex px-2 sm:px-10 items-center">
          <BiSolidBookHeart className="w-7 h-7 mr-1" />
          <p className="leading-none">Favoritos</p>
        </div>
        </NavLink>

      </div>
    </nav>
  );
};
