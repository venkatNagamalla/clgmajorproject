import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Headers = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  const renderLaptopView = () => {
    return (
      <section
        className="hidden md:flex fixed top-0 left-0 right-0 w-full z-50 
bg-[#30364f8e] backdrop-blur-md 
border border-[#ffffff5b] 
rounded-lg h-14 
items-center justify-between px-6"
      >
        {/* App Name */}
        <h1 className="text-xl font-bold">M</h1>

        <nav className="w-[60%] lg:w-[40%]">
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
              <NavLink className="flex items-center" to="/search">Search</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  };

  const renderMobileView = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <section
        className="md:hidden fixed top-0 left-0 right-0 z-50
        border border-[#ffffff5b] rounded-lg h-12 flex items-center
        justify-between px-4 bg-[#30364f8e] backdrop-blur-md"
      >
        <h1 className="text-lg font-bold text-white">M</h1>

        <button onClick={handleMenu} className="text-2xl text-white">
          {menu ? <RxCross2 /> : <IoMenu />}
        </button>
      </section>

      {/* Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={handleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-12 bottom-0 z-50
        bg-[#1e2235]
        shadow-2xl
        border-l border-[#ffffff2a]
        w-[70%] sm:w-[60%]
        transition-all duration-300
        flex flex-col
        ${menu ? "right-0" : "right-[-100%]"}`}
      >
        <ul className="mt-5 text-white">

          <NavLink
            to="/"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : ""
            }
          >
            <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f] hover:bg-[#2b3048]">
              Popular
            </li>
          </NavLink>

          <NavLink
            to="/top-rated"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : ""
            }
          >
            <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f] hover:bg-[#2b3048]">
              Top Rated
            </li>
          </NavLink>

          <NavLink
            to="/upcoming-movies"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : ""
            }
          >
            <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f] hover:bg-[#2b3048]">
              Upcoming Movies
            </li>
          </NavLink>

          <NavLink
            to="/search"
            onClick={handleMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : ""
            }
          >
            <li className="px-6 h-12 flex items-center border-b border-[#ffffff1f] hover:bg-[#2b3048]">
              Search
            </li>
          </NavLink>

        </ul>
      </nav>
    </>
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
