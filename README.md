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
#### React组件通信
**组件通信的意义**
> 组件是独立且封闭的单元，默认情况下组件只能使用自己的数据（state）
> 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
> 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信

组件通信的方式包括：
- 父子关系 - **最重要的**
- 兄弟关系 - 自定义事件模式产生技术方法 / 通过共同的父组件通信
- 其它关系 - mobx / redux / 基于hook的方案

**父传子**
实现父子通信中的父传子，把父组件中的数据传给子组件（通过props）
**代码实现**
```jsx
import React from 'react'

// 函数式子组件
function FSon(props) {
  console.log(props)
  return (
    <div>
      子组件1
      {props.msg}
    </div>
  )
}

// 类子组件
class CSon extends React.Component {
  render() {
    return (
      <div>
        子组件2
        {this.props.msg}
      </div>
    )
  }
}
// 父组件
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <FSon msg={this.state.message} />
        <CSon msg={this.state.message} />
      </div>
    )
  }
}

export default App
```

注意：
- 根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改
- props可以传递任意数据
  - 数字、字符串、布尔值、数组、对象、函数、JSX

**子传父实现**
实现父子通信中的子传父
方式：父组件给子组件传递回调函数，子组件调用
**代码实现**
```jsx
import React from 'react'

// 子组件
function Son(props) {
  function handleClick() {
    // 调用父组件传递过来的回调函数 并注入参数
    props.changeMsg('this is newMessage')
  }
  return (
    <div>
      {props.msg}
      <button onClick={handleClick}>change</button>
    </div>
  )
}


class App extends React.Component {
  state = {
    message: 'this is message'
  }
  // 提供回调函数
  changeMessage = (newMsg) => {
    console.log('子组件传过来的数据:',newMsg)
    this.setState({
      message: newMsg
    })
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <Son
          msg={this.state.message}
          // 传递给子组件
          changeMsg={this.changeMessage}
        />
      </div>
    )
  }
}

export default App
```

**兄弟组件通信**
方式：通过状态提升机制，利用共同的父组件实现兄弟通信
**代码实现：**
```jsx
import React from 'react'

// 子组件A
function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  )
}
// 子组件B
function SonB(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg('new message')}>changeMsg</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 父组件提供状态数据
  state = {
    message: 'this is message'
  }
  // 父组件提供修改数据的方法
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg
    })
  }

  render() {
    return (
      <>
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default App
```

**跨组件通信Context**
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
**实现步骤：**
1、创建Context对象 导出 Provider 和 Consumer对象
```jsx
const { Provider, Consumer } = createContext()
```
2、使用Provider包裹根组件提供数据
```jsx
<Provider value={this.state.message}>
    {/* 根组件 */}
</Provider>
```
3、需要用到数据的组件使用Consumer包裹获取数据
```jsx
<Consumer >
    {value => /* 基于 context 值进行渲染*/}
</Consumer>
```
**组件通信详情请看源代码src/components/ComponentsCommunication**