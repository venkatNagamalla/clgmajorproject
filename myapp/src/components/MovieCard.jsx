import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const MovieCard = (props) => {
  const { movieDetails } = props;
  const { id, poster, title, rating } = movieDetails;

  return (
    <li className="h-75 hover:rounded-xs transition-all duration-10 hover:border hover:border-gray-50 w-[48%] sm:w-[47%] md:w-[30%] lg:w-[17%] lg:h-65 overflow-hidden">
      <Link
        className="h-full w-full relative"
        to={`/movie/${id}`}
      >
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
          />
        </div>
        <div className="absolute h-[28%] flex flex-col rounded-tl-xl rounded-tr-xl justify-between pl-2 pt-3 pb-3 w-full backdrop-blur-md bg-black/60 bottom-0">
          <h2 className="text-white font-semibold text-md z-10 lg:text-sm ">{title.length > 20 ? title.slice(0,23): title}</h2>
          <p className="text-yellow-400 font-semibold text-md lg:text-sm z-10 flex items-center"><IoIosStar className="mr-1" />{rating.toFixed(1) <= 0 ? "Not yet released!" : rating.toFixed(1)}</p>
        </div>
      </Link>
    </li>
  );
};

export default MovieCard;
