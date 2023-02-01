import React, { Component } from "react"
import "./ComponentsCommunication.css"

class ComponentsCommunication extends Component {
  state = {
    son1Message:
      "类组件的父传子通信，由于类组件继承了Component的props属性，所以在内部可以直接通过this.props访问",
    son2Message: "函数组件的父传子可通过参数props来访问",
  }
  render() {
    return (
      <div className="father">
        <p>父组件</p>
        <Son1 message={this.state.son1Message} />
        <Son2 message={this.state.son2Message} />
      </div>
    )
  }
}

class Son1 extends Component {
  render() {
    const { message } = this.props
    return (
      <div className="son1">
        <p>类子组件</p>
        <p>{message}</p>
      </div>
    )
  }
}

function Son2(props) {
  return (
    <div className="son2">
      <p>函数子组件</p>
      <p>{props.message}</p>
    </div>
  )
}

export default ComponentsCommunication
