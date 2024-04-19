import { FaRegUser } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-4 z-10">
      <div className="container flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold pl-8">Webapp</h1>

        <div className="flex items-center space-x-4 gap-5">
          <AiOutlineGlobal
            className="text-white text-xl cursor-pointer"
            title="This links don't work"
          />

          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <FaRegUser
              className="text-white text-xl"
              title="This links don't work"
            />
            <p className="text-white text-xl hidden lg:block">User</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
