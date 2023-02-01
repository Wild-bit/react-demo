import React, { Component } from "react"
import "./ComponentsCommunication.css"

class ComponentsCommunication extends Component {
  state = {
    son1Message:
      "类组件的父传子通信，由于类组件继承了Component的props属性，所以在内部可以直接通过this.props访问",
    son2Message: "函数组件的父传子可通过参数props来访问",
    receiveSonqMessage: "",
  }
  changeMsg = (newMessage) => {
    console.log(newMessage)
    this.setState({
      receiveSonqMessage: newMessage,
    })
  }
  render() {
    return (
      <div className="father">
        <p>父组件</p>
        <p>{this.state.receiveSonqMessage}</p>
        <Son1 message={this.state.son1Message} changeMsg={this.changeMsg} />
        <Son2 message={this.state.son2Message} />
      </div>
    )
  }
}

class Son1 extends Component {
  handleClick = () => {
    // 调用父组件传递过来的回调函数 并注入参数
    this.props.changeMsg(
      "我是Son1，通过调用父组件传递过来的回调函数 并注入所需的参数来实现子传父的通信"
    )
  }
  render() {
    const { message } = this.props
    return (
      <div className="son1">
        <p>类子组件</p>
        <p>{message}</p>
        <button onClick={this.handleClick}>子传父</button>
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
