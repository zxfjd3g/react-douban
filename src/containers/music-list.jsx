import React, {Component} from 'react'

import Header from '../containers/header'

export default class MusicList extends Component {
  render() {
    return (
      <div>
        <Header title='豆瓣音乐'/>
        <div>音乐列表</div>
      </div>
    )
  }
}