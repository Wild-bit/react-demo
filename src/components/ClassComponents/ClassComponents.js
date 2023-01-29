import React from "react"

// 定义类组件
class HelloComponents extends React.Component {
  // 渲染组件内容使用render函数
  sayHello = () => {
    alert("HelloComponents")
  }
  render() {
    return (
      <>
        <div onClick={this.sayHello}>这是一个类组件</div>
      </>
    )
  }
}
export default HelloComponents
