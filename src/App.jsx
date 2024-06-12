import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Board from './components/Board/Board'
import Question from './components/Question/Question'

function App() {
  const [trivia, setTrivia] = useState([])

  const getTriviaData = async () => {
      try {
          const res = await axios(`http://localhost:8080/questions`)
          setTrivia(res.data)
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      getTriviaData()
  }, [])

  return (
    <>
      <Board trivia={trivia}></Board>
      <Question trivia={trivia}></Question>
    </>
  )
}

export default App
