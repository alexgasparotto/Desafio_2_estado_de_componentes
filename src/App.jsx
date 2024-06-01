import { useState } from "react";
import Registro from "./componets/Registro"
function App() {
  const [message, setMessage] = useState({
    error: false,
    msg: "",
    color: ""
  })

  const setAlert = (newAlert) => {
    setMessage(newAlert);
  }
  return (
   <Registro message={message} setAlert={setAlert} />
  )
}

export default App

