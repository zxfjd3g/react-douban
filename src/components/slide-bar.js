import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Book from 'material-ui/svg-icons/av/library-books';
import Movie from 'material-ui/svg-icons/av/movie';
import Music from 'material-ui/svg-icons/av/library-music';
import Info from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

import {toggleSideBar} from '../redux/actions'

class SideBar extends Component {

  handleToggle = (url, e) => {
    console.log(this.props)
    e.preventDefault();
    const {toggleSideBar} = this.props;
    toggleSideBar(false);
    url && this.props.history.push(url);
  }

  render() {

    const {toggleSideBar, isOpen} = this.props;
    const pathname = this.props.location.pathname
    const style = {[pathname]: {background: '#cccccc'}}
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={isOpen}
          onRequestChange={(open) => toggleSideBar(open)}
        >
          <section className="side-bar-info">
            豆瓣
          </section>
          <MenuItem primaryText="电影"
                    onClick={this.handleToggle.bind(this, '/')}
                    leftIcon={<Movie/>}
                    style={style['/']}/>
          <MenuItem primaryText="读书"
                    onClick={this.handleToggle.bind(this, '/booklist')}
                    leftIcon={<Book/>}
                    style={style['/booklist']}/>
          <MenuItem primaryText="音乐"
                    onClick={this.handleToggle.bind(this, '/musiclist')}
                    leftIcon={<Music/>}
                    style={style['/musiclist']}/>
          <Divider/>
          <MenuItem onClick={this.handleToggle.bind(this, '/about')}
                    primaryText="关于"
                    leftIcon={<Info/>}
                    style={style['/about']}/>
        </Drawer>
      </div>
    )
  }
};

export default connect(
  state => ({
    isOpen: state.slideBarStatus,
  }),
  {toggleSideBar}
)(withRouter(SideBar));
