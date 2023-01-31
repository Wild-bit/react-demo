import React from "react"

// 定义类组件
class HelloComponents extends React.Component {
  // 操作组件状态
  state = {
    count: 0,
    score: [60, 90, 100, 80],
  }
  // 渲染组件内容使用render函数
  sayHello = () => {
    alert("HelloComponents")
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  setScore = () => {
    this.setState({
      score: [...this.state.score, 92],
    })
  }
  render() {
    return (
      <>
        <div onClick={this.sayHello}>这是一个类组件</div>
        <p>count:{this.state.count}</p>
        <button onClick={this.addCount}>添加count</button>
        {this.state.score.map((i, index) => {
          return <p key={index}>分数：{i}</p>
        })}
        <button onClick={this.setScore}>添加分数</button>
      </>
    )
  }
}
export default HelloComponents
