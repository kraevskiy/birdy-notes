import {TYPES} from '../types'
import {DATA} from '../../data'

export const loadAllPosts = () => {
  return (dispatch) => {
    return dispatch({type: TYPES.POSTS.LOAD_ALL_POSTS, payload: DATA})
  }
}

export const toggleBooked = (id) => {
  return (dispatch) => {
    return dispatch({type: TYPES.POSTS.TOGGLE_BOOKED, payload: id})
  }
}

export const removePost = (id) => {
  return (dispatch) => {
    return dispatch({type: TYPES.POSTS.REMOVE_POST, payload: id})
  }
}
