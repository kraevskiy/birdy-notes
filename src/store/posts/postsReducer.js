import {TYPES} from '../types'

const initialState = {
  allPosts: [],
  bookedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.POSTS.LOAD_ALL_POSTS:
      return {...state, allPosts: action.payload}
    case TYPES.POSTS.LOAD_BOOKED_POSTS:
      return {...state, bookedPosts: action.payload}
    default:
      return state
  }
}
