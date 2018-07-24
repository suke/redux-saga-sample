// action tyoe
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creators
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

const initialState = {
  count: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
