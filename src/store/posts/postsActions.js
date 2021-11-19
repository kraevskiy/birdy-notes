import {TYPES} from '../types'
import {DB} from '../../db'

export const loadAllPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts()

    return dispatch({type: TYPES.POSTS.LOAD_ALL_POSTS, payload: posts})
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

export const addPost = (post) => {
  return (dispatch) => {
    post.id = Date.now().toString()
    return dispatch({type: TYPES.POSTS.ADD_POST, payload: post})
  }
}
