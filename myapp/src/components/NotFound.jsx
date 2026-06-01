import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-lg mb-2">Oops! This movie page does not exist.</h1>
      <Link to="/">
        <button className="bg-yellow-400 text-black p-2 rounded cursor-pointer font-semibold text-sm">
          Go to Home Page
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
