import "./global.css"
import { Button } from "./components/button"
import { useMessage } from "./hooks/useMensage"
import styles from "./app.module.css"

export function App() {
  const message = useMessage({ name: "Nadson ferinha" })

  return (
    <div className={styles.container}>
      <Button name="Add" onClick={() => message.show("Hello World!")} />
      <span>0</span>
      <Button name="Remove" />
    </div>
  )
}