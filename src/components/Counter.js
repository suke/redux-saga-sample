import React, { Component } from 'react'

// export default class Counter extends Component {
//   render() {
//     const { increment, decrement, count } = this.props
//     return (
//       <div>
//         <input type="button" value="increment " onClick={() => increment()} />
//         <input type="button" value="decrement " onClick={() => decrement()} />
//         count: {count}
//       </div>
//     )
//   }
// }

export default ({ increment, decrement, count }) => (
  <div>
    <input type="button" value="increment " onClick={() => increment()} />
    <input type="button" value="decrement " onClick={() => decrement()} />
    count: {count}
  </div>
)
