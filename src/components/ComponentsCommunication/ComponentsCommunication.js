import React, { Component, createContext } from "react"
import "./ComponentsCommunication.css"
let { Provider, Consumer } = createContext()

class ComponentsCommunication extends Component {
  state = {
    son1Message:
      "类组件的父传子通信，由于类组件继承了Component的props属性，所以在内部可以直接通过this.props访问",
    son2Message: "函数组件的父传子可通过参数props来访问",
    receiveSonqMessage: "",
    grandMessage: "来自爷爷的爱",
    car: {
      name: "奔驰C",
      color: "白色",
    },
  }
  setCar = (carInfo) => {
    this.setState({
      car: carInfo,
    })
  }
  changeMsg = (newMessage) => {
    console.log(newMessage)
    this.setState({
      receiveSonqMessage: newMessage,
    })
  }
  render() {
    return (
      <Provider value={this.state.grandMessage}>
        <div className="father">
          <p>父组件</p>
          <p>Provider 传递{this.state.grandMessage}</p>
          <p>{this.state.receiveSonqMessage}</p>
          <Son1
            message={this.state.son1Message}
            changeMsg={this.changeMsg}
            car={this.state.car}
          />
          <Son2 message={this.state.son2Message} setCar={this.setCar} />
          <br />
          <p>
            跨组件通信（爷孙组件通信）：
            <span>
              Context 提供了一个无需为每层组件手动添加
              props，就能在组件树间进行数据传递的方法
            </span>
          </p>
          <p>1、创建Context对象 导出 Provider 和 Consumer对象</p>
          <p>2、使用Provider包裹根组件提供数据</p>
          <p>3、需要用到数据的组件使用Consumer包裹获取数据</p>
          <Son3 />
        </div>
      </Provider>
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
    const { message, car } = this.props
    return (
      <div className="son1">
        <p>类子组件</p>
        <p>{message}</p>
        <button onClick={this.handleClick}>子传父</button>
        <p>
          兄弟组件之间的通信：提升数据的层级（将数据放在共同父级，通过props传递与修改）
        </p>
        <p>
          汽车品牌:{car.name},汽车颜色:{car.color}
        </p>
      </div>
    )
  }
}

function Son2(props) {
  const { setCar } = props
  return (
    <div className="son2">
      <p>函数子组件</p>
      <p>{props.message}</p>
      <button onClick={() => setCar({ name: "宝马", color: "黑色" })}>
        修改Son1组件的汽车信息
      </button>
    </div>
  )
}

class Son3 extends Component {
  render() {
    return (
      <div className="son3">
        <p>子组件</p>
        <GrandSon />
      </div>
    )
  }
}

class GrandSon extends Component {
  render() {
    return (
      <div className="grandSon">
        <p>孙子组件</p>
        <Consumer>
          {(value) => <p>Consumer接收来自爷爷的爱：{value}</p>}
        </Consumer>
      </div>
    )
  }
}

export default ComponentsCommunication
