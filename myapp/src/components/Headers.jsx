import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Headers = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);


  const renderLaptopView = () => {
    return (
      <section className="bg-[#30364f8e] hidden border rounded-lg border-[#ffffff5b] h-12 mt-4 md:flex justify-between items-center px-4">
        <h1>M</h1>
        <nav className="w-[40%]">
          <ul className="flex w-[full] justify-between">
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

  const renderMoblieView = () => {
    return (
      <section className="md:hidden border mt-4 rounded-lg border-[#ffffff5b] h-10 flex justify-between items-center px-5  bg-[#30364f8e]">
          <h1>M</h1>
          {menu ? (
            <button onClick={handleMenu}>
              <RxCross2 />
            </button>
          ) : (
            <button onClick={handleMenu}>
              <IoMenu />
            </button>
          )}
        <nav
          className={`bg-[#30364f8e] border border-[#ffffff5b] fixed flex flex-col top-15 bottom-0 transition-all duration-300 
           ${menu ? "left-[60%]" : "left-full"} w-[60%]`}
        >
          <ul>
  <NavLink
    to="/"
    onClick={handleMenu}
    className={({ isActive }) =>
      isActive ? "text-blue-700 font-semibold" : ""
    }
  >
    <li className="px-5 flex items-center h-10 mb-3">Popular</li>
  </NavLink>

  <NavLink
    to="/top-rated"
    onClick={handleMenu}
    className={({ isActive }) =>
      isActive ? "text-blue-700 font-semibold" : ""
    }
  >
    <li className="px-5 flex items-center h-10 mb-3">Top Rated</li>
  </NavLink>

  <NavLink
    to="/upcoming-movies"
    onClick={handleMenu}
    className={({ isActive }) =>
      isActive ? "text-blue-700 font-semibold" : ""
    }
  >
    <li className="px-5 flex items-center h-10 mb-3">Upcoming Movies</li>
  </NavLink>

  <NavLink
    to="/search"
    onClick={handleMenu}
    className={({ isActive }) =>
      isActive ? "text-blue-700 font-semibold" : ""
    }
  >
    <li className="px-5 flex items-center h-10 mb-3">Search</li>
  </NavLink>
</ul>
        </nav>
      </section>
    );
  };

  return (
    <>
      {renderLaptopView()}
      {renderMoblieView()}
    </>
  );
};

export default Headers;
