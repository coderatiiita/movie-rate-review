import React from 'react';
import "./Review.css"
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: 1,
      movieId:props.movieId
    };
  }

//   componentDidMount() {
//     fetch('http://localhost:4000/api/users/me').then(user => {
//       if (user.status === 200) {
//         window.location = '/movies';
//       }
//     });
//   }

  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = e => {
    e.preventDefault();
    const { review, rating, movieId } = this.state;
    fetch('/api/users/me').then(user => {
      if (user.status !== 200) {
        window.location = '/login';
        console.log(user);
      }
      return user.json();
    })
    .then(user=>{
        fetch('/api/movies/ratingandreview',{
          method:"POST",
          body:JSON.stringify({review,rating,movieId}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(res=>{
          if(res.status===201){
            window.location="/movies/"+this.state.movieId;
          }
        })
    })
  }

  render() {
    return (
      <div className="mainDiv">
        <p className="review-header">ADD  REVIEW </p>
          <form className="mainForm">
              <div style={{marginBottom:"10px"}}>
                  <span className="spanReview">Review</span>  
                  <input className="inputMain" placeholder="What do you feel about this movie?" name="review" required type="text" onInput={this.onInput} value={this.state.review}></input>    
              </div>  
              <div style={{marginBottom:"10px"}}>
                  <span className="spanReview">Rating</span>
                  {/* <input className="inputMain" placeholder="rating" name="rating" required type="number" min="1" max="5" onInput={this.onInput} value={this.state.rating}></input> */}
                  <select className="selectReview" name="rating" type="number" value={this.state.rating} onChange={this.onInput}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
              </div>
              <div className="reviewDiv">
                  <input className="reviewButton" type="submit" onClick={this.onSubmit} value="Submit"></input>
              </div>
          </form>
      </div>
    );
  }
}

export default Review;