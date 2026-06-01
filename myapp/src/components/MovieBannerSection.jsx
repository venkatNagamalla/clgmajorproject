import React from "react";

const MovieBannerSection = ({ movieDetails }) => {
  const {
    banner,
    genres,
    overview,
    poster,
    rating,
    releaseDate,
    runtime,
    title,
  } = movieDetails;

  return (
    <section className="w-full bg-black text-white">
      <div className="flex flex-col lg:flex-row lg:h-80 overflow-hidden">
        <div className="flex flex-col sm:flex-row lg:w-[60%] p-3 gap-3">
          <div className="shrink-0 w-34 sm:w-36 lg:w-44 mx-auto sm:mx-0">
            <img
              className="w-full h-full object-cover rounded-md border border-white/20 shadow-lg"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={title}
            />
          </div>

          <div className="flex flex-col justify-center gap-y-2 min-w-0">
            <h2 className="font-semibold text-lg sm:text-xl leading-tight">
              {title}
              <span className="font-normal text-gray-400 ml-1.5 text-sm">
                ({releaseDate?.slice(0, 4)})
              </span>
            </h2>

            <ul className="flex flex-wrap gap-x-1.5 gap-y-1 text-xs text-gray-300">
              {genres.map((g) => (
                <li key={g.id} className="bg-white/10 px-2 py-0.5 rounded-full">
                  {g.name}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm">
              <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 font-bold rounded-sm">
                IMDb
              </span>
              <span className="text-yellow-300 font-medium">
                {rating?.toFixed(1)}
              </span>
              <span className="text-gray-400">/10</span>
              {runtime && (
                <span className="text-gray-400 text-xs ml-1">
                  · {runtime} min
                </span>
              )}
            </div>

            <hr className="border-white/10 my-0.5" />

            <p className="text-xs text-gray-300 leading-relaxed line-clamp-4 lg:line-clamp-5">
              {overview}
            </p>
          </div>
        </div>

        {/* RIGHT: Banner Image — top on mobile/tablet, right on desktop */}
        <div className="order-first lg:order-last lg:w-[40%] h-44 sm:h-56 lg:h-full shrink-0">
          <img
            className="w-full h-full object-cover opacity-80"
            src={`https://image.tmdb.org/t/p/w780${banner}`}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieBannerSection;
