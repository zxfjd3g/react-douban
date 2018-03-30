/*
包含n个action creator函数的模块
 */
import {
  TOGGLE_SIDE_BAR,
  LOADING_STATUS,
  RECEIVE_MOVE,
  RECEIVE_MOVES,
  RECEIVE_SEARCH_MOVES
} from './action-types'
import {
  reqMovies,
  reqMovie,
  reqSearchMovie
} from '../api'

import {createAction} from 'redux-actions'

export const loadingStatus = createAction(LOADING_STATUS)
export const toggleSideBar = createAction(TOGGLE_SIDE_BAR)

const receiveMovie = createAction(RECEIVE_MOVE)
const receiveMovies = createAction(RECEIVE_MOVES)
const receiveSearchMovie = createAction(RECEIVE_SEARCH_MOVES)

// 异步获取movie信息的action
export const getMovie = (id) => {
  return async (dispatch) => {
    dispatch(loadingStatus(true));
    const response = await reqMovie(id)
    dispatch(loadingStatus(false))
    dispatch(receiveMovie(response.data))
  }
}

// 异步获取movie列表的action
export const getMovies = (type) => {
  return async (dispatch) => {
    dispatch(loadingStatus(true));
    const response = await reqMovies(type)
    dispatch(loadingStatus(false))
    dispatch(receiveMovies(response.data.subjects))
  }
}

// 异步搜索movie列表的action
export const searchMovie = (searchName) => {
  return async (dispatch) => {
    dispatch(loadingStatus(true));
    const response = await reqSearchMovie(searchName)
    dispatch(loadingStatus(false))
    dispatch(receiveSearchMovie(response.data.subjects))
  }
}




