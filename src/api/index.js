
/*
包含所有ajax请求方法的模块
 */
import ajax from './ajax'

export const MOVIE_TYPE = {
  IN_THEATERS: 'in_theaters',
  COMING_SOON: 'coming_soon'
}

// 电影榜单信息
const FETCH_MOVIE_LIST = `/movie`
// 获取电影详情
const FETCH_MOVIE_BY_ID = `/movie/subject`
// 搜索电影
const SEARCH_MOVIE = `/movie/search?q=`

export const reqMovies = (type) => ajax(`${FETCH_MOVIE_LIST}/${type}?start=0&count=10`)
export const reqMovie = (id) => ajax(`${FETCH_MOVIE_BY_ID}/${id}`)
export const reqSearchMovie = (searchName) => ajax(`${SEARCH_MOVIE + searchName}`)