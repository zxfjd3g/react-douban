import React, {Component, PropTypes} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import SideBar from '../components/slide-bar'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

import {toggleSideBar} from '../redux/actions'

class Header extends Component {
  handleToggler = () => {
    const {toggleSideBar} = this.props;
    toggleSideBar && toggleSideBar(true);
  }

  handleRightButtonTouch = () => {
    this.props.history.push('/search');
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonClick={this.handleToggler}
          iconElementRight={<IconButton><Search/></IconButton>}
          onRightIconButtonClick={this.handleRightButtonTouch}
        />
        <SideBar open={this.props.isOpen} toggleBar={this.props.toggleSideBar}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    isOpen: state.slideBarStatus
  }),
  {toggleSideBar}
)(withRouter(Header))