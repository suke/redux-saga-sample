import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { increment, decrement, getRepository, count } = this.props
    return (
      <div>
        <input type="button" value="increment " onClick={() => increment()} />
        <input type="button" value="decrement " onClick={() => decrement()} />
        <input
          type="button"
          value="getRepository "
          onClick={() => getRepository()}
        />
        count: {count}
      </div>
    )
  }
}
