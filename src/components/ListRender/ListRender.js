import "./ListRender.css"
export default function ListRender() {
  const jsx = "JSX表达式-用单括号包裹变量｛｝"
  const flag = true
  const listSting = ["榴莲", "西瓜", "哈密瓜", "车厘子", "草莓"]
  return (
    <>
      <p className="title">JSX基础语法</p>
      <p className="sub-title">{jsx}</p>
      <div className="sub-title">JSX-列表渲染</div>
      <p className="desc">
        与vue使用指令v-for不同，react使用 Javascript转化列表，使用数组方法map
      </p>
      <ul>
        {listSting.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <p className="sub-title">条件渲染</p>
      <p className="desc">使用三元运算符或逻辑与运算符(&&)</p>
      {/* 条件渲染字符串 */}
      <p className="text">true渲染：{flag ? "react真有趣" : "vue真有趣"}</p>
      <p className="text">false渲染：{!flag ? "react真有趣" : "vue真有趣"}</p>
    </>
  )
}
