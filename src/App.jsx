import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Board from './components/Board/Board'
import Question from './components/Question/Question'

function App() {
  const [count, setCount, ] = useState(0)

  return (
    <>
      <Board></Board>
      <Question></Question>
    </>
  )
}

export default App
