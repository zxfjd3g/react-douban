import {combineReducers} from 'redux'
import {
  TOGGLE_SIDE_BAR,
  LOADING_STATUS,
  RECEIVE_MOVE,
  RECEIVE_MOVES,
  RECEIVE_SEARCH_MOVES
} from './action-types'

const initSearchMovies = []

export function searchMovies(state = initSearchMovies, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_MOVES:
      return action.payload;
    default: {
      return state;
    }
  }
}

const initMovies = []

export function movies(state = initMovies, action) {
  switch (action.type) {
    case RECEIVE_MOVES: {
      return [...action.payload]
    }
    default: {
      return state;
    }
  }
}

const initMovie = {}
export const movie = (state = initMovie, action) => {
  switch (action.type) {
    case RECEIVE_MOVE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

const initLoading = false

export function loading(state = initLoading, action) {
  switch (action.type) {
    case LOADING_STATUS: {
      return action.payload
    }
    default: {
      return state;
    }
  }
}

const initSlideBarStatus = false

export function slideBarStatus(state = initSlideBarStatus, action) {
  switch (action.type) {
    case TOGGLE_SIDE_BAR: {
      return action.payload
    }
    default:
      return state;
  }
}


export default combineReducers({
  searchMovies,
  movies,
  movie,
  slideBarStatus,
  loading
})