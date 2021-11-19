import {TYPES} from '../types'
import {DB} from '../../db'
import {FS} from '../../fs'

export const loadAllPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts()

    return dispatch({type: TYPES.POSTS.LOAD_ALL_POSTS, payload: posts})
  }
}

export const toggleBooked = (post) => {
  return async (dispatch) => {
    await DB.updatePost(post)
    return dispatch({type: TYPES.POSTS.TOGGLE_BOOKED, payload: post.id})
  }
}

export const removePost = (id) => {
  return async (dispatch) => {
    await DB.removePost(id)
    return dispatch({type: TYPES.POSTS.REMOVE_POST, payload: id})
  }
}

export const addPost = (post) => {
  return async (dispatch) => {
    const newPath = await FS.getPathMovedImg(post.img)
    const payload = {
      ...post,
      img: newPath
    }

    payload.id = await DB.createPost(payload)

    return dispatch({type: TYPES.POSTS.ADD_POST, payload})
  }
}
