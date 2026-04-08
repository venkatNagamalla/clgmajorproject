import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import LoaderView from "./LoaderView";

const apiKey = "e2ab8a4105df7b69787b3a32979db5f9";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const MovieSearch = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [search, setSearch] = useState("")

  const format = (obj) => ({
    id: obj.id,
    title: obj.title,
    rating: obj.vote_average,
    poster: obj.poster_path,
  });

   const getSearchMovieDetails = async (movieName) => {
    setApiStatus(apiStatusConstants.inProgress);
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api\_key=${apiKey}&language=en-US&query=${movieName}&page=${page}`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      const totalPagesCount = data.total_pages;
      const updatedData = data.results.map((eachMovie) => format(eachMovie));
      setApiStatus(apiStatusConstants.success);
      setTotalPages(totalPagesCount);
      setPopularMoviesList(updatedData);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const getMovieDetails = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;

    const response = await fetch(apiUrl);
 
    if (response.ok) {
      const data = await response.json();
      const updatedData = data.results.map((eachMovie) => format(eachMovie));

      setPopularMoviesList(updatedData);
      setTotalPages(data.total_pages);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
  if (search === "") {
      getMovieDetails();
    } else {
      getSearchMovieDetails(search);
    }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}, [page]);

  const renderFailureView = () => (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <h1 className="text-xl md:text-2xl font-semibold">Something Went Wrong</h1>
      <button
        onClick={getMovieDetails}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );

  const renderSuccessView = () => (
    <ul
      className="
      flex
      flex-wrap
      gap-4
      justify-center
    "
    >
      {popularMoviesList.map((eachMovie) => (
        <MovieCard key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </ul>
  );

  const onPageDecrement = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const onPageIncrement = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderLoaderView = () => (
    <div className="flex justify-center items-center h-[80vh]">
      <LoaderView />
    </div>
  );

  const renderViews = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoaderView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.success:
        return renderSuccessView();
      default:
        return null;
    }
  };

  const renderPage = () => (
    <div
      className="
      flex 
      flex-col 
      md:flex-row 
      items-center 
      justify-center 
      gap-4 
      px-6 
      py-4
      mb-2
    "
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onPageDecrement}
          className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-500"
        >
          Prev
        </button>

        <p className="text-lg font-medium">Page <span className="text-yellow-500">{page}</span></p>

        <button
          onClick={onPageIncrement}
          className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );

  const searchMovie = (e) => {
    if(search !== "" && e.key === "Enter"){
          getSearchMovieDetails(search)
    }
    else if(search === ""){
      getMovieDetails()
    }
  }

  const renderSearchBar = () => {
    return (
      <div className="h-9 md:ml-9 md:w-[500px] mt-10 mb-10">
        <input onKeyDown={searchMovie} onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search movie name here..." className="border border-yellow-400 outline-none px-2 h-[100%] w-[80%]" type="search"/>
        <button onClick={() => {
          search === ""
            ? getMovieDetails()
            : getSearchMovieDetails(search);
        }} className="w-[20%] h-[100%] cursor-pointer font-semibold bg-yellow-400 text-black" type="button">Search</button>
      </div>
    )
  }

  return (
    <div className="max-w-[1400px] mt-20 mx-auto">
      {renderSearchBar()}
      {renderViews()}

      <hr className="border-gray-700 my-5" />
      
      {popularMoviesList.length !== 0 && (
        <>
          <hr />
          {apiStatus === "SUCCESS" ? renderPage(): ""}
        </>
      ) }
      
    </div>
  );
};

export default MovieSearch;