import React from "react"
import "./Form.css"

export default class Form extends React.Component {
  state = {
    inputVal: "",
  }
  handlerInput = (e) => {
    this.setState({
      inputVal: e.target.value,
    })
  }
  render() {
    return (
      <div className="Form">
        <p>受控组件</p>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handlerInput}
        />
      </div>
    )
  }
}
