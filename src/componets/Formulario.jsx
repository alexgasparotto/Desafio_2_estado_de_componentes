import { Button, Form } from "react-bootstrap"
import { useState } from "react"

function Formulario({ setAlert }) {
  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  const VALIDATE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateForm = (e) => {
    e.preventDefault()

    if (!name || !email || !password || !repassword) {
      setAlert({
        error: true,
        msg: "C",/* completa todo los campos */
        color: "danger",
      })
      return
    }

    if (!VALIDATE_EMAIL.test(email)) {
      setAlert({
        error: true,
        msg: "El email debe tener un formato válido!",
        color: "danger",
      })
      return
    }

    if (password !== repassword) {
      setAlert({
        error: true,
        msg: "Las contraseñas no coinciden!",
        color: "warning",
      })
      return
    }

    setAlert({
      error: false,
      msg: "Cuenta creada exitosamente!",
      color: "success"
    })
    setName('nombre')/* clear name */
    setEmail('')
    setPassword('')
    setRePassword('')
  }

  return (
    <Form onSubmit={validateForm} noValidate>
      <Form.Control
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Nombre"
      />
      <Form.Control
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="tuemail@ejemplo.com"
      />
      <Form.Control
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Contraseña"
      />
      <Form.Control
        type="password"
        id="repassword"
        onChange={(e) => setRePassword(e.target.value)}
        value={repassword}
        placeholder="Confirma tu contraseña"
      />
      <Button type="submit" variant="success">Registrarse</Button>
    </Form>
  )
}

export default Formulario
