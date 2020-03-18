import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      reviews: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.reviews !== [];
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(movieData => this.setState({ reviews: movieData.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews movies={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer;
