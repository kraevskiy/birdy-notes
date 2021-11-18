import {TYPES} from '../types'

const initialState = {
  loading: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.APP.SHOW_LOADING:
      return {...state, loading: true}
    case TYPES.APP.HIDE_LOADING:
      return {...state, loading: false}
    default:
      return state
  }
}
