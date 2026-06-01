import React from "react";

const CastCard = ({ castDetails }) => {
  const { characterName, name, profile } = castDetails;

  return (
    <li className="shrink-0 w-28 sm:w-32 group">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
        {profile ? (
          <img
            className="w-full h-36 sm:h-40 object-cover object-top transition-transform duration-300 group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w185${profile}`}
            alt={name}
          />
        ) : (
          <div className="w-full h-36 sm:h-40 bg-white/10 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-2 px-0.5">
        <p className="text-white text-xs font-semibold leading-tight truncate">
          {name}
        </p>
        <p className="text-gray-400 text-xs truncate mt-0.5">{characterName}</p>
      </div>
    </li>
  );
};

export default CastCard;
