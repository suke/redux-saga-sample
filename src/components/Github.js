import React, { Component } from 'react'

export default class Github extends Component {
  render() {
    const { data, getRepository, setInputValue, className } = this.props
    return (
      <div className={className}>
        <div>リポジトリ一覧</div>
        <input
          type="text"
          defaultValue=""
          ref="inputText"
          onChange={e => setInputValue(e.target.value)}
        />
        <input
          type="button"
          value="検索する"
          onClick={() => getRepository(this.refs.inputText.value)}
        />
        {Object.keys(data).length !== 0 &&
          data.map((item, index) => {
            return <li key={index}>{item.full_name}</li>
          })}
      </div>
    )
  }
}

// export default ({ getRepository, setInputValue }) => (
//   <div>
//     <input
//       type="text"
//       defaultValue=""
//       onChange={e => setInputValue(e.target.value)}
//     />
//     <input
//       type="button"
//       value="検索する"
//       onClick={inputValue => getRepository(inputValue)}
//     />
//   </div>
// )
