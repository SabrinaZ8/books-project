import { CiMenuFries } from "react-icons/ci";
import { BiSolidBookHeart } from "react-icons/bi";

export const NavBar = () => {
  return (
    <nav className="flex w-full justify-between p-10">
      <div>
        <i>Logo</i>
      </div>
      <div className="flex items-center">
        <div className="flex px-10">
          <BiSolidBookHeart className="h-5 w-5 mr-1"/>
          <p className="leading-none">wishlist</p>
        </div>
        <div>
          <CiMenuFries />
        </div>
      </div>
    </nav>
  );
};
