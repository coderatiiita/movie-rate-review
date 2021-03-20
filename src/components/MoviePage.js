import React from 'react';
import axios from  'axios';
import Feedback from './Feedback.js';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movieDetails:{},ratings:{}};
    }

    componentDidMount() {
        axios.get(`/api/movies/ratingandreview/${this.props.match.params.movieId}`)
        .then(response => {
            console.log(response);
            this.setState({movieDetails: response.data.movieData,ratings:response.data.ratingsandreviews});
        })
    }


    
    
    render() {
        // const repos = this.state.developer.repos
        // const movieData = this.state.movieDetails.movieData;
        // const feedbacks = this.state.movieDetails.ratingsandreviews;
        // const image_background = "http://image.tmdb.org/t/p/w780/"+this.state.movieDetails.movieData.backdrop_path;
        // const title = movieData.original_title;
        // const description="Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil fo";
        // const movieposter = "http://image.tmdb.org/t/p/w780/"+movieData.poster_path;
        // const rating= movieData.vote_average;
        // const totalVotes = movieData.vote_count;
        // var divImage = {
        //     backgroundImage : 'url(' + image_background + ')'
        //   };
        console.log(this.state.ratings);
        return (
            <>
            {/* <p>{this.state.movieDetails.original_title}</p> */}
                <div className="movie-detail-container">
                    {/* <div className="poster">
                        <img src={movieposter} alt={title}/>
                    </div> */}
                    <div className="description-movie">
                        <h1>{this.state.movieDetails.original_title}</h1>

                        <div>
                            <h3>PLOT</h3>
                            <p>{this.state.movieDetails.original_title}</p>
                        </div>

                        <div>
                            <h3>RATING</h3>
                            <p>{this.state.movieDetails.original_title}</p>
                        </div>

                        <div>
                            <h3>TOTAL VOTES</h3>
                            <p>{this.state.movieDetails.original_title}</p>
                        </div>

                    </div>
                </div>

                <div className="feedback-main-conatiner">
                    {this.state.ratings.length>0 && this.state.ratings.map(feedback =>(<Feedback key={feedback.id} {...this.state.ratings}  />))}
                </div>


            </>



        



        );

    }


}

export default MoviePage;