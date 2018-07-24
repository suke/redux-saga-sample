// action tyoe
export const GETREPOSITORY = 'GETREPOSITORY'
export const SUCCESSGETREPOSITORY = 'SUCCESSGETREPOSITORY'
// action creators
export const getRepository = () => ({ type: GETREPOSITORY })
export const successGetRepository = data => ({
  type: SUCCESSGETREPOSITORY,
  data
})

const initialState = {
  data: []
}

export default function githubReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESSGETREPOSITORY':
      return { data: [...state, ...action.data] }
    default:
      return state
  }
}
