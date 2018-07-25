// action tyoe
export const SETINPUTVALUE = 'SETINPUTVALUE'
export const GETREPOSITORY = 'GETREPOSITORY'
export const SUCCESSGETREPOSITORY = 'SUCCESSGETREPOSITORY'
// action creators
export const setInputValue = value => {
  console.log(value)
  return {
    type: SETINPUTVALUE,
    inputValue: value
  }
}
export const getRepository = name => ({ type: GETREPOSITORY, name })
export const successGetRepository = data => ({
  type: SUCCESSGETREPOSITORY,
  data
})

const initialState = {
  data: [],
  inputValue: ''
}

export default function githubReducer(state = initialState, action) {
  switch (action.type) {
    case 'SETINPUTVALUE':
      return { ...state, inputValue: action.inputValue }
    case 'SUCCESSGETREPOSITORY':
      return { data: [...action.data] }
    default:
      return state
  }
}
