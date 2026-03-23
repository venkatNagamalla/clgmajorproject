import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Headers = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  const renderLaptopView = () => {
    return (
      <section className="hidden md:flex bg-[#30364f8e] border border-[#ffffff5b] rounded-lg h-14 mt-4 items-center justify-between px-6">
       {/* update the movies application name */}
        <h1 className="text-xl font-bold">M</h1>

        <nav className="w-[50%] lg:w-[40%]">
          <ul className="flex justify-between text-sm lg:text-base">
            <li>
              <NavLink to="/">Popular</NavLink>
            </li>
            <li>
              <NavLink to="/top-rated">Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming-movies">Upcoming Movies</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  };

  const renderMobileView = () => {
    return (
      <section className="md:hidden mt-4 border border-[#ffffff5b] rounded-lg h-12 flex items-center justify-between px-4 bg-[#30364f8e]">
       {/* update the movies application name */}
        <h1 className="text-lg font-bold">M</h1>

        <button onClick={handleMenu} className="text-2xl">
          {menu ? <RxCross2 /> : <IoMenu />}
        </button>

        <nav
          className={`fixed top-16 bottom-0 bg-[#30364f] border-l border-[#ffffff5b] w-[70%] sm:w-[60%] transition-all duration-300 flex flex-col ${
            menu ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="mt-5">
            <NavLink
              to="/"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f]">
                Popular
              </li>
            </NavLink>

            <NavLink
              to="/top-rated"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f]">
                Top Rated
              </li>
            </NavLink>

            <NavLink
              to="/upcoming-movies"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f]">
                Upcoming Movies
              </li>
            </NavLink>

            <NavLink
              to="/search"
              onClick={handleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f]">
                Search
              </li>
            </NavLink>
          </ul>
        </nav>
      </section>
    );
  };

  return (
    <>
      {renderLaptopView()}
      {renderMobileView()}
    </>
  );
};

export default Headers;