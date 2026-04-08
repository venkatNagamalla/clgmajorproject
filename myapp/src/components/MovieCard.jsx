
import {Link} from "react-router-dom"

const MovieCard = (props) => {
  const { movieDetails } = props;
  const { id,poster, title, rating } = movieDetails;

  return (
    <Link to={`/movie/${id}`}>
       <li className="w-[48%] cursor-pointer lg:w-[200px] h-[300px] border border-white overflow-hidden shadow-md mb-3 hover:scale-102 transition duration-200">
      <div className="bg-[#1f1f1f] h-full">
        
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          className="w-full h-[235px] object-cover"
        />

        <div className="px-3 mt-1 flex flex-col gap-1">
          
          <p className="text-white text-md">
            {title.slice(0,20)}
          </p>

          <h4 className="text-yellow-400 text-sm font-semibold">
            ⭐ {rating.toFixed(1) <= 0 ? "Not yet released!" : rating.toFixed(1)}
          </h4>
        </div>

      </div>
    </li>
    </Link>
  );
};

export default MovieCard;