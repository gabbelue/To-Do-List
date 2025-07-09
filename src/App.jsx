import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './componentes/form'
import Agenda from './componentes/agenda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Agenda/>
    </>
  )
}

export default App
