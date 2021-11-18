import {combineReducers} from 'redux'
import {appReducer} from './app/appReducer'
import {postsReducer} from './posts/postsReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer
})
