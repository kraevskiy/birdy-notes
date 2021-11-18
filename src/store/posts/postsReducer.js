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
    case TYPES.POSTS.TOGGLE_BOOKED:
      const allPosts = state.allPosts.map(post => {
        if (post.id === action.payload) {
          post.booked = !post.booked
        }
        return post
      })
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter(post => post.booked)
      }
    default:
      return state
  }
}
