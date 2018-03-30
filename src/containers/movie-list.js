import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Tabs, Tab} from 'material-ui'

import Header from '../containers/header'
import Loading from '../components/Loading'
import ListItems from '../components/list-items'
import {getMovies, toggleSideBar} from '../redux/actions'
import {MOVIE_TYPE} from '../api'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tabs: {
    display: 'block',
  },
  gridList: {
    overflowY: 'auto',
  },
  colLIst: {
    padding: '5px'
  }
};

class MovieList extends Component {
  state = {
    type: MOVIE_TYPE.IN_THEATERS,
  }

  componentWillMount() {
    this.props.getMovies(this.state.type);
  }

  handleChange = (type) => {
    console.log('toggleSideBar()', type)
    this.setState({
      type
    })
    this.props.getMovies(type);
  }

  toggleSideBar = (type) => {

  }

  render() {
    const {loading, movies} = this.props;

    return (
      <div>
        <Header title='豆瓣电影'/>
        <Tabs
          value={this.state.type}
          onChange={this.handleChange}
        >
          <Tab label="正在上映" value={MOVIE_TYPE.IN_THEATERS} style={styles.tabs}>
            <Loading show={loading}/>
            <ListItems items={movies}/>
          </Tab>
          <Tab label="将要上映" value={MOVIE_TYPE.COMING_SOON} style={styles.tabs}>
            <Loading show={loading}/>
            <ListItems items={movies}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default connect(
  state => ({
    movies: state.movies,
    loading: state.loading,
    isOpen: state.slideBarStatus
  }),
  {getMovies, toggleSideBar}
)(MovieList)
