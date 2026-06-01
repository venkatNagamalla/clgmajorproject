// import React from "react";

// const MovieBannerSection = (props) => {
//   const { movieDetails } = props;
//   const {
//     banner,  //
//     genres,
//     id,  
//     overview,
//     poster,  //
//     rating, 
//     releaseDate, //
//     runtime,
//     title, //
//   } = movieDetails;

//   console.log(movieDetails);

//   return (
//     <section className="h-130 bg-red-500 lg:h-80">
//       <div className="w-full h-100 lg:h-70 bg-black lg:p-2 flex flex-col lg:flex-row relative lg:justify-between">

//         <div className="order-1 lg:w-[60%] lg:order-0 flex flex-col lg:flex-row items-center absolute top-25 right-0 left-0 lg:top-0 lg:static">
//           <div className="w-[30%] lg:w-[28%] h-full rounded-sm overflow-hidden">
//             <img className="h-full border-2 border-white rounded-md" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title}/>
//           </div>
          
//           <div className="mt-3 pb-5 lg:pr-2 lg:ml-2 lg:mt-0 w-full lg:w-[70%] h-full p-2 bg-black flex flex-col lg:items-start lg:justify-center">
//             <h2 className="font-semibold text-lg lg:text-xl lg:my-2">{title}<span className="font-normal text-gray-400 ml-1 text-sm">({releaseDate.slice(0,4)})</span></h2>
//               <ul className="flex mt-1 text-sm text-gray-300 lg:my-1">{genres.map((eachGenre) => <li className="mr-1" key={eachGenre.id}>{eachGenre.name}</li>)}</ul>
//             <h4><span className="bg-yellow-400 text-black text-xs px-2 font-semibold">IMDb</span><span className="ml-2 text-sm">{rating.toFixed(1)}/10</span></h4>
//             <hr className="text-gray-400 my-2" />
//             <p className="text-[12px] text-gray-300">{overview}</p>
//           </div>
//         </div>

//         <div className="h-[200px] lg:h-full lg:w-[40%]">
//           <img className="h-full lg:h-full w-full object-cover" src={`https://image.tmdb.org/t/p/w500${banner}`} alt={title} />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default MovieBannerSection;
import React from "react";

const MovieBannerSection = ({ movieDetails }) => {
  const { banner, genres, overview, poster, rating, releaseDate, runtime, title } = movieDetails;

  return (
    <section className="w-full bg-black text-white">
      <div className="flex flex-col lg:flex-row lg:h-80 overflow-hidden">

        <div className="flex flex-col sm:flex-row lg:w-[60%] p-3 gap-3">
          
          <div className="flex-shrink-0 w-28 sm:w-36 lg:w-44 mx-auto sm:mx-0">
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
              <span className="text-yellow-300 font-medium">{rating?.toFixed(1)}</span>
              <span className="text-gray-400">/10</span>
              {runtime && (
                <span className="text-gray-400 text-xs ml-1">· {runtime} min</span>
              )}
            </div>

            <hr className="border-white/10 my-0.5" />

            <p className="text-xs text-gray-300 leading-relaxed line-clamp-4 lg:line-clamp-5">
              {overview}
            </p>
          </div>
        </div>

        {/* RIGHT: Banner Image — top on mobile/tablet, right on desktop */}
        <div className="order-first lg:order-last lg:w-[40%] h-44 sm:h-56 lg:h-full flex-shrink-0">
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