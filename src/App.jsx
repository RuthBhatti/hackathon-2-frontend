import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Board from './components/Board/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Board></Board>
    </>
  )
}

export default App
