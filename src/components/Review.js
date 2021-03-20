import React from 'react';

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
    fetch('http://localhost:4000/api/users/me').then(user => {
      if (user.status !== 200) {
        window.location = '/';
        console.log(user);
      }
      return user.json();
    })
    .then(user=>{
        fetch('http://localhost:4000/api/movies/ratingandreview',{
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
      <div>
        <p>Add Rating </p>
        <form >
          <input placeholder="review" name="review" required type="text" onInput={this.onInput} value={this.state.review}></input>
          <input placeholder="rating" name="rating" required type="number" min="1" max="5" onInput={this.onInput} value={this.state.rating}></input>
          <div>
            <input type="submit" onClick={this.onSubmit} value="Submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Review;
