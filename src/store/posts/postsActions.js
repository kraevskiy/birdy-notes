import {TYPES} from '../types'
import {DATA} from '../../data'

export const loadAllPosts = () => {
  return (dispatch) => {
    return dispatch({type: TYPES.POSTS.LOAD_ALL_POSTS, payload: DATA})
  }
}

export const loadBookedPosts = () => {
  return (dispatch) => {
    const bookedPosts = DATA.filter(post => post.booked)
    return dispatch({type: TYPES.POSTS.LOAD_BOOKED_POSTS, payload: bookedPosts})
  }
}

export const toggleBooked = (id) => {
  return (dispatch) => {
    return dispatch({type: TYPES.POSTS.TOGGLE_BOOKED, payload: id})
  }
}
