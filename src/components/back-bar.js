import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

class BackBar extends Component {

  render() {
    return (
      <AppBar
        title={<span style={{cursor: 'pointer'}}>{this.props.title}</span>}
        onLeftIconButtonClick={this.props.goBack}
        iconElementLeft={<IconButton><ArrowLeft/></IconButton>}
      />
    )
  }
}

export default BackBar