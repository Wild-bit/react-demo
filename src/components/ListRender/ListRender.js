import "./ListRender.css"
export default function ListRender() {
  const listSting = ["榴莲", "西瓜", "哈密瓜", "车厘子", "草莓"]
  return (
    <>
      <div className="title">JSX-列表渲染</div>
      <p className="desc">
        与vue使用指令v-for不同，react使用 Javascript转化列表，使用数组方法map
      </p>
      <ul>
        {listSting.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </>
  )
}
