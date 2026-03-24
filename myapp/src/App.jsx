import Headers from './components/Headers';
import {Routes,Route} from 'react-router-dom'
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import UpcomingMovies from './components/UpcomingMovies';
import MovieSearch from './components/MovieSearch';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <main className='flex justify-center bg-[#0e1113f5]'>
    
      <section className='w-[95%] min-h-[100vh] md:w-[90%]'>
         <Headers/>
      
      <Routes>
         <Route exact path="/" element={<Popular/>} />
         <Route exact path="/top-rated" element={<TopRated/>} />
         <Route exact path="/upcoming-movies" element={<UpcomingMovies/>} />
         <Route exact path="/search" element={<MovieSearch/>} />
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      </section>

    </main>
  );
}

export default App;
