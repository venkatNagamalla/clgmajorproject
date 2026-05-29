import React from 'react'

const MovieBannerSection = (props) => {

    const {movieDetails} = props 
    const {banner,genres,id,overview,poster,rating,releaseDate,runtime,title} = movieDetails
    
    console.log(movieDetails)

  return (
      <section>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${banner}`} alt={title}/>
              </div>
        </section>
  )
}

export default MovieBannerSection