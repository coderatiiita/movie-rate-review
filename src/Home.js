import React,{useEffect,useState,Component} from 'react';
import Movie from './components/Movie';
import Navbar from './components/Navbar.js'
import axios from  'axios';

// const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=687f4af88c405c0b881295bba3d4adfc&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const homeapi= "/api/movies/";
const SEARCH_API ="/api/movies/search/";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.getMovies(homeapi);
  }
  // this usestate means movies ki initial value ek empty list hai and searchterm ki ek empty string , 
  // in states ko change karne k liye setmovies and setSearchTerm use hoga ,
  // whenever we change movies, the map function runs on jo jo value hai list mein , i.e whatever movies it has 

  getMovies = (API) =>{
    axios(API)
    .then((res)=>{
      let newArray = [];
      let uniqueObject = {};
      for(let i in res.data){
        let objTitle = res.data[i].title;
        uniqueObject[objTitle] = res.data[i];
      }
      for (let i in uniqueObject){
        newArray.push(uniqueObject[i]);
      }
      this.setState((prevState)=>({
        ...prevState,
        movies:newArray
      }),()=>{
        console.log(this.state.movies.length);
      })
    })  
};

  handleOnChange = (e) => {
    this.setState({searchTerm:e.target.value},()=>{
      if(this.state.searchTerm.length>0){
        this.getMovies(SEARCH_API + this.state.searchTerm);
      }
      else{
        this.getMovies(homeapi);
      }
    })
};

  render(){
    return (
      <> 
       {/* have modified root class in index.html */}
       <div className="root">
           <Navbar/>
              <header>
                  <form>
                  <input className="search" type="text"
                  placeholder="Search.." value={this.state.searchTerm}
                  onChange={this.handleOnChange} />
                  </form>
              </header>
              <div className="movie-container">
                  {this.state.movies.length>0 && this.state.movies.map(movie =>(<Movie key={movie.title} {...movie}  />))}
              </div>
  
        </div>
  
      </>
    );
  }  
}

export default Home;
