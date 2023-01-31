### React组件

#### 函数式组件
**概念：使用 JS 的函数（或箭头函数）创建的组件，就叫做 函数组件**
**组件定义与渲染**
```jsx
// 定义函数组件
function HelloFn () {
  return <div>这是我的第一个函数组件!</div>
}

// 定义函数组件
function App () {
  return (
    <div className="App">
      {/* 渲染函数组件 */}
      <HelloFn />
      <HelloFn></HelloFn>
    </div>
  )
}
export default App
```
**注意：函数式组件必须有返回值，如果没有内容则需返回null**
#### 类组件
**概念：使用 ES6 的 class 创建的组件，叫做类（class）组件**
**组件定义与渲染**
```jsx
// 引入React
import React from 'react'

// 定义类组件
class HelloC extends React.Component {
  render () {
    return <div>这是我的第一个类组件!</div>
  }
}

function App () {
  return (
    <div className="App">
      {/* 渲染类组件 */}
      <HelloC />
      <HelloC></HelloC>
    </div>
  )
}
export default App
```
注意：
1、类名称也必须**以大写字母开头**
2、类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3、类组件必须提供 render方法 render 方法**必须有返回值，表示该组件的 UI 结构**

#### 操作并修改组件状态
**方式：语法：this.setState({ 要修改的部分数据 })**
```jsx
import React from "react"

// 定义类组件
class HelloComponents extends React.Component {
  // 操作组件状态
  state = {
    count: 0,
    score: [60, 90, 100, 80],
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
```
注意：不要直接修改状态的值，而是基于当前状态创建新的状态值
错误修改
```jsx
state = {
  count : 0,
  list: [1,2,3],
  person: {
     name:'jack',
     age:18
  }
}
// 直接修改简单类型Number
this.state.count++
++this.state.count
this.state.count += 1
this.state.count = 1

// 直接修改数组
this.state.list.push(123)
this.state.list.splice(1,1)

// 直接修改对象
this.state.person.name = 'rose'
```
正确的修改
```jsx
this.setState({
    count: this.state.count + 1
    list: [...this.state.list, 4],
    person: {
       ...this.state.person,
       // 覆盖原来的属性 就可以达到修改对象中属性的目的
       name: 'rose'
    }
})
```