import React, { createRef } from "react"
import "./Form.css"

export default class Form extends React.Component {
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()
  state = {
    inputVal: "",
    inputVal2: "",
  }
  handlerInput = (e) => {
    this.setState({
      inputVal: e.target.value,
    })
  }
  changeHandler = () => {
    this.setState({
      inputVal2: this.msgRef.current.value,
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
        <p>非受控组件</p>
        <input ref={this.msgRef} type="text" />
        <button onClick={this.changeHandler}>click</button>
        <span>{this.state.inputVal2}</span>
      </div>
    )
  }
}
