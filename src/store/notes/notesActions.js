import {TYPES} from '../types'
import {DB} from '../../db'
import {FS} from '../../fs'

export const loadAllNotes = () => {
  return async (dispatch) => {
    const notes = await DB.getNotes()
    return dispatch({type: TYPES.NOTES.LOAD_ALL_NOTES, payload: notes})
  }
}

export const toggleBooked = (note) => {
  return async (dispatch) => {
    await DB.updateNote(note)
    return dispatch({type: TYPES.NOTES.TOGGLE_BOOKED, payload: note.id})
  }
}

export const removeNote = (id) => {
  return async (dispatch) => {
    await DB.removeNote(id)
    return dispatch({type: TYPES.NOTES.REMOVE_NOTE, payload: id})
  }
}

export const addNote = (note) => {
  return async (dispatch) => {
    const newPath = await FS.getPathMovedImg(note.img)
    const payload = {
      ...note,
      img: newPath
    }

    payload.id = await DB.createNote(payload)

    return dispatch({type: TYPES.NOTES.ADD_NOTE, payload})
  }
}

export const editNote = (note) => {
  return async (dispatch) => {
    await DB.editNote(note)
    return dispatch({type: TYPES.NOTES.EDIT_NOTE, payload: note})
  }
}
