import "./App.css"
import ListRender from "./components/ListRender/ListRender"
import HelloComponents from "./components/ClassComponents/ClassComponents"
import From from "./components/Form/Form"
import ComponentsCommunication from "./components/ComponentsCommunication/ComponentsCommunication"
function App() {
  return (
    <div className="App">
      <ListRender />
      <HelloComponents />
      <From />
      <ComponentsCommunication />
    </div>
  )
}

export default App
