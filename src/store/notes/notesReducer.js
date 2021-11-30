import {TYPES} from '../types'

const initialState = {
  allNotes: [],
  bookedNotes: [],
  loading: true
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.NOTES.LOAD_ALL_NOTES:
      return {
        ...state,
        allNotes: action.payload,
        bookedNotes: action.payload.filter(note => note.booked),
        loading: false
      }
    case TYPES.NOTES.TOGGLE_BOOKED:
      const allNotes = state.allNotes.map(note => {
        if (note.id === action.payload) {
          note.booked = !note.booked
        }
        return note
      })
      return {
        ...state,
        allNotes,
        bookedNotes: allNotes.filter(note => note.booked)
      }
    case TYPES.NOTES.REMOVE_NOTE:
      const afterRemovePosts = state.allNotes.filter(note => note.id !== action.payload)
      return {
        ...state,
        allNotes: afterRemovePosts,
        bookedNotes: afterRemovePosts.filter(note => note.booked)
      }
    case TYPES.NOTES.ADD_NOTE:
      return {
        ...state,
        allNotes: [{...action.payload}, ...state.allNotes]
      }
    case TYPES.NOTES.EDIT_NOTE:
      const afterEditPosts = state.allNotes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      return {
        ...state,
        allNotes: afterEditPosts,
        bookedNotes: afterEditPosts.filter(note => note.booked)
      }
    default:
      return state
  }
}
