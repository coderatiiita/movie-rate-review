import React from 'react';
import './moviePoster.css'
const image_background = "http://image.tmdb.org/t/p/w780/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg";
const title = "Raya and the Last Dragon";
const description="Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil fo";
const movieposter = "http://image.tmdb.org/t/p/w780/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg";
const rating= "8.3";
const totalVotes = "200";
const director = "XYZ";

var divImage = {
    backgroundImage : 'url(' + image_background + ')'
  };


const Movie = () => 
(
<div className="Movie-Page-Main-Container"  style={divImage}>
    <div className="movie-detail-container">
        <div className="poster">
            <img src={movieposter} alt={title}/>
        </div>
        <div className="description-movie">
            <h1>{title}</h1>

            <div>
                <h3>PLOT</h3>
                <p>{description}</p>
            </div>

            <div>
                <h3>RATING</h3>
                <p>{rating}</p>
            </div>

            <div>
                <h3>DIRECTOR</h3>
                <p>{director}</p>
            </div>

        
        </div>

    </div>

</div>
);

export default Movie;
