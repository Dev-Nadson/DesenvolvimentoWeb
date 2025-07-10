import { Button } from "./components/button"

export function App(){
  return (
  <div>
    <Button name="Clique" onClick={() => alert("Clicado")}/>
    <Button name="Aqui"/>
    <Button name="Agora"/>
    </div>
  )
}