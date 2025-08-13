import { useEffect, type FC } from 'react'
import { Fragment, useState } from 'react'
import { type Board } from '../models/Board'
import CellComponent from './CellComponent'
import CoordinateStrip from './CoordinateStrip'
import { type Cell } from '../models/Cell'
import type { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    
  function click(cell: Cell) {

    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
      updateBoard()
    
    } else {
      
      if (cell.figure?.color === currentPlayer?.color) 
      setSelectedCell(cell)
    }

    if (cell.figure === selectedCell?.figure) {
      setSelectedCell(null);
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell]);

  function highlightCells()  {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }


  return (
    <div>
      <h3 style={{
        position: "relative", 
        top: "-65px", 
        fontSize: "30px", 
        fontWeight: "bold", 
        fontFamily: "Arial"}}>
          Текущий игрок <span style={{
            backgroundColor: `${currentPlayer?.color}`, 
            borderRadius: "10px",
            color: `${currentPlayer?.color === Colors.WHITE ? "black" : "white"}`,
            padding: "5px"
            }}>{currentPlayer?.color}
            </span>
      </h3>

       <div
          className='board'
      >
          {board.cells.map((row, index) => (
              <Fragment key={index}>
                  {row.map((cell) => 
                      <CellComponent 
                          cell={cell} 
                          key={cell.id} 
                          selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                          click={click}
                      />
                  )}
              </Fragment>
          ))}
          <CoordinateStrip stripPosition="left"/>
          <CoordinateStrip stripPosition="right"/>
          <CoordinateStrip stripPosition="top"/>
          <CoordinateStrip stripPosition="bottom"/>
       </div>
    </div>
   
  )
}

export default BoardComponent