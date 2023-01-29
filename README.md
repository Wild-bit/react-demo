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