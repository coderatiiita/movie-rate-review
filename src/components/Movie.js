import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
    if(vote >= 4){
        return "green";
    } else if(vote >=3){
        return "orange";
    } else{
        return "red";
    }
};
const Movie = ({title,poster_path,overview,vote_average,_id}) => {
    let history = useHistory();
    return (
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title}  onClick={()=>history.push("/movies/"+_id)}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>
                {vote_average}
            </span> 
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>

        </div>

    </div>
    );
}
export default Movie;
