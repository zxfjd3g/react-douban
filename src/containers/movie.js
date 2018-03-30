import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Loading from '../components/Loading'
import BackBar from '../components/back-bar'

import {getMovie} from '../redux/actions'

class Movie extends Component {

  componentWillMount() {
    console.log(this.props)
    const {getMovie, match} = this.props;
    getMovie(match.params.id);
  }

  renderMeta() {
    const {movie} = this.props;
    let cast = movie.casts.reduce((name, value) => {
      return name ? name + ' / ' + value.name : value.name;
    }, '');
    return (
      <div>
        {movie.countries.join(' / ') + ' / ' + movie.genres.join(' / ')
        + ' / ' + movie.directors[0].name + '(导演) / ' + cast}
      </div>
    );
  }

  renderMovieSubject() {
    const {movie} = this.props;
    return (
      <div>
        <BackBar goBack={this.props.history.goBack} title={movie.title}/>
        <div className="image-wrap" style={{backgroundImage: 'url(' + movie.images.large + ')'}}/>

        <div className="title-border">
          <div className="title-info">
            <div className="title-image">
              <img src={movie.images.large}/>
            </div>
            <div className="title-text">
              <p>{movie.title}</p>
              <p>{movie.rating.average}</p>
            </div>
          </div>
        </div>

        <div className="info">
          {this.renderMeta()}
        </div>
        <div className="summary">{movie.summary}</div>
      </div>
    );
  }

  render() {
    const {loading, movie} = this.props;
    return (
      <div>
        <Loading show={loading}/>
        {movie.title && this.renderMovieSubject()}
      </div>
    )
  }
}

export default connect(
  state => ({
    movie: state.movie,
    loading: state.loading
  }),
  {getMovie}
)(Movie)