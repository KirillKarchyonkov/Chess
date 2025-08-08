import './reset.css'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { useEffect, useState } from 'react'
import { Board } from './models/Board'

function App() {

  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <section className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </section>
  )
}

export default App
