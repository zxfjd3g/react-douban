import React, {Component} from 'react'
import Header from '../containers/header'

export default class BookList extends Component {
  render() {
    return (
      <div>
        <Header title='豆瓣图书'/>
        <div>图书列表</div>
      </div>
    )
  }
}