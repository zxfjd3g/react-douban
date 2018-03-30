import React, {Component} from 'react'
import MenuItem from 'material-ui/MenuItem';
import Code from 'material-ui/svg-icons/action/code';
import Web from 'material-ui/svg-icons/av/web';
import Email from 'material-ui/svg-icons/communication/email'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import BackBar from './back-bar';

class About extends Component {

  render() {
    return (
      <div>
        <BackBar goBack={this.props.history.goBack} title='关于'/>
        <header className="about">
          React 豆瓣
          <p className="sub-title">学习 react + react-router + redux 的入门项目</p>
        </header>
        <Subheader inset={true}>项目地址</Subheader>
        <MenuItem leftIcon={<Code/>}>
          <a href="https://github.com/zxfjd3g/react-douban">GitHub地址</a>
        </MenuItem>
        <Divider/>
        <Subheader inset={true}>联系我</Subheader>
        <MenuItem leftIcon={<Email/>}>zhangxiaofei@atguigu.com</MenuItem>
        <MenuItem leftIcon={<Web/>}>
          <a href="http://www.atguigu.com">www.atguigu.com</a>
        </MenuItem>
      </div>
    )
  }
}

export default About
