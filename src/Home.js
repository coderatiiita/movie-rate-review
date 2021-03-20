import React,{useEffect,useState} from 'react';
import Movie from './components/Movie';
import axios from  'axios';

// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=687f4af88c405c0b881295bba3d4adfc&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const homeapi= "/api/movies/all";
// const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=687f4af88c405c0b881295bba3d4adfc&query=f";

function Home() {
  const [ movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  // this usestate means movies ki initial value ek empty list hai and searchterm ki ek empty string , 
  // in states ko change karne k liye setmovies and setSearchTerm use hoga ,
  // whenever we change movies, the map function runs on jo jo value hai list mein , i.e whatever movies it has 

  useEffect(()=>{
    getMovies(homeapi);
  },[]);


  const getMovies = (API) =>{
    axios(API)
    .then((res)=>{setMovies(res.data);console.log(res.data);})
    
};

const handleOnSubmit = (e) => {
  e.preventDefault();
  if (searchTerm){

    // getMovies(SEARCH_API + searchTerm)
    setSearchTerm("");

  }

};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);


};


  return (
    <> 
     {/* have modified root class in index.html */}
     <div className="root">
         <div className="Main-Poster">
             <p>Movie Rating App</p>
         </div>
            <header>
                <form onSubmit={handleOnSubmit}>
                <input className="search" type="text"
                placeholder="Search.." value={searchTerm}
                onChange={handleOnChange} />
                </form>
            </header>
            

            <div class="movie-container">
                {movies.length>0 && movies.map(movie =>(<Movie key={movie.id} {...movie}  />))}
            </div>

      </div>

    </>
  );
 
  
}

export default Home;
