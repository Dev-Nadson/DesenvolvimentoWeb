import "./global.css"
import { Button } from "./components/button"
import "./style.css"

export function App(){
  return (
  <div className="container">
    <Button name="Clique" onClick={() => alert("Clicado")}/>
    <Button name="Aqui"/>
    <Button name="Agora"/>
    </div>
  )
}