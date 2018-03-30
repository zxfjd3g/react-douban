import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import store from './redux/store'
import MovieList from './containers/movie-list'
import About from './components/about'
import BookList from './containers/book-list'
import MusicList from './containers/music-list'
import Search from './containers/search'
import Movie from './containers/movie'

import './assets/css/index.css'

injectTapEventPlugin();

render(
  (
    <Provider store={store}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/about' component={About}/>
            <Route path='/booklist' component={BookList}/>
            <Route path='/musiclist' component={MusicList}/>
            <Route path='/search' component={Search}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route component={MovieList}/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root')
)