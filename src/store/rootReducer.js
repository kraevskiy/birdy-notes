import {combineReducers} from 'redux'
import {postsReducer} from './posts/postsReducer'

export const rootReducer = combineReducers({
  posts: postsReducer
})
