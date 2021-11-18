import {TYPES} from '../types'

export const showLoading = () => {
  return (dispatch) => {
    return dispatch({type: TYPES.APP.SHOW_LOADING})
  }
}
export const hideLoading = () => {
  return (dispatch) => {
    return dispatch({type: TYPES.APP.HIDE_LOADING})
  }
}
