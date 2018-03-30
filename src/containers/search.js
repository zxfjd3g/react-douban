import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Close from 'material-ui/svg-icons/navigation/close';

import ListItems from '../components/list-items'
import Loading from '../components/Loading'
import {searchMovie} from '../redux/actions'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  colLIst: {
    padding: '5px'
  }
};

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      search: '',
    }
  }

  handleClean = () => {
    this.setState({search: ''})
  }

  handleBackButton = () => {
    this.props.history.goBack();
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value,
      show: true
    });
  }

  handleSubmit(e) {
    const {searchMovie} = this.props;
    if (e.keyCode == '13') {
      searchMovie && searchMovie(this.state.search);
    }
  }

  renderCloseButton() {
    return this.state.show
      ?
      <IconButton
        onTouchTap={this.handleClean}>
        <Close/>
      </IconButton>
      : null;
  }

  renderSearchInput() {
    return (
      <section>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={{width: 100 + '%'}}>
            <IconButton
              onTouchTap={this.handleBackButton}>
              <ArrowLeft/>
            </IconButton>
            <TextField
              fullWidth={true}
              hintText="输入电影"
              onChange={this.handleInput}
              onKeyUp={(e) => this.handleSubmit(e)}
              value={this.state.search}
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <IconButton
              onTouchTap={this.handleClean}>
              <Close/>
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </section>
    )
  }

  render() {
    const {loading, searchMovies} = this.props;
    return (
      <div>
        {this.renderSearchInput()}
        <Loading show={loading}/>
        {searchMovies.length > 0 && <ListItems items={searchMovies}/>}
      </div>
    )
  }
}

export default connect(
  state => ({
    loading: state.loading,
    searchMovies: state.searchMovies
  }),
  {searchMovie}
)(Search)
