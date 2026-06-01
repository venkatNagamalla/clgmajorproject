import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoaderView from "./LoaderView";
import CastCard from "./CastCard";
import MovieBannerSection from "./MovieBannerSection";

const apiKey = "e2ab8a4105df7b69787b3a32979db5f9";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieApiStatus, setMovieApiStatus] = useState(
    apiStatusConstants.initial,
  );
  const [castDetails, setCastDetails] = useState([]);
  const [castApiStatus, setCastApiStatus] = useState(
    apiStatusConstants.initial,
  );

  const { id } = useParams();

  const formatData = (obj) => ({
    id: obj.id,
    title: obj.original_title,
    rating: obj.vote_average,
    releaseDate: obj.release_date,
    runtime: obj.runtime,
    overview: obj.overview,
    banner: obj.backdrop_path,
    poster: obj.poster_path,
    genres: obj.genres,
  });

  const getBannerDetails = async () => {
    setMovieApiStatus(apiStatusConstants.inProgress);
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      const updatedData = formatData(data);
      setMovieDetails(updatedData);
      setMovieApiStatus(apiStatusConstants.success);
    } else {
      setMovieApiStatus(apiStatusConstants.failure);
    }
  };

  const getCastDetails = async () => {
    setCastApiStatus(apiStatusConstants.inProgress);
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      const castDetails = data.cast.map((eachCast) => ({
        id: eachCast.id,
        characterName: eachCast.character,
        name: eachCast.original_name,
        profile: eachCast.profile_path,
      }));
      setCastDetails(castDetails);
      setCastApiStatus(apiStatusConstants.success);
    } else {
      setCastApiStatus(apiStatusConstants.failure);
    }
  };

  useEffect(() => {
    getBannerDetails();
    getCastDetails();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const renderLoaderView = () => (
    <div className="flex justify-center items-center h-[80vh]">
      <LoaderView />
    </div>
  );

  const renderMovieFailureView = () => (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      <h1 className="text-xl md:text-2xl font-semibold">
        Something Went Wrong
      </h1>
      <button
        onClick={getBannerDetails}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );

  const renderCastFailureView = () => (
    <div className="container">
      <FailureView />
      <button
        className="retry-btn"
        onClick={() => {
          getCastDetails();
        }}
        type="button"
      >
        Retry
      </button>
    </div>
  );

  const renderMovieDetails = () => (
    <div className="">
      <MovieBannerSection movieDetails={movieDetails} />
    </div>
  );

  const renderMovieDetailsSection = () => {
    switch (movieApiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoaderView();
      case apiStatusConstants.failure:
        return renderMovieFailureView();
      case apiStatusConstants.success:
        return renderMovieDetails();
      default:
        return null;
    }
  };

  const renderCastDetails = () => (
    <div className="bg-black py-4 mt-5 px-3">
      <h2 className="text-white text-xl font-semibold mb-3 tracking-wide">
        Cast
        <span className="ml-2 text-xs text-gray-500 font-normal">
          ({castDetails.length})
        </span>
      </h2>

      <div className="relative">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10
                      bg-linear-to-l to-transparent"
        />
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10
                      bg-linear-to-r to-transparent"
        />

        <ul className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {castDetails.map((eachCast) => (
            <CastCard key={eachCast.id} castDetails={eachCast} />
          ))}
        </ul>
      </div>
    </div>
  );

  const renderCastDetailsSection = () => {
    switch (castApiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoaderView();
      case apiStatusConstants.failure:
        return renderCastFailureView();
      case apiStatusConstants.success:
        return renderCastDetails();
      default:
        return null;
    }
  };

  return (
    <section className="mt-20">
      {renderMovieDetailsSection()}
      {renderCastDetailsSection()}
    </section>
  );
};

export default MovieDetails;
