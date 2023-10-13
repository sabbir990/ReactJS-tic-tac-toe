import React, { useEffect, useState } from "react";
import Box from "./box";
import '../index.css';
import ting from '../tic tac toe/ting.mp3'
function Board({ boxes, setBoxes, getTurn, count }) {
  const [isXTurn, setIsXTurn] = useState(true);
  const [won, setWon] = useState(true);
  const winningFunction = () => {
    const winArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [1, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const winningCondition of winArray) {
      const [x, y, z] = winningCondition;
      if ((boxes[x] === boxes[y]) && (boxes[x] === boxes[z]) && boxes[x]) {
        return boxes[x];
      }
    }

    return false;
  }
  const isWinner = winningFunction();
  const handleIndex = (index) => {
    if(boxes[index] !== null){
      return;
    }
    console.log("Clicked index:", index);
    const audio = new Audio(ting);
    audio.play();
    const copyBoxes = [...boxes];
    copyBoxes[index] = isXTurn ? "X" : "0";
    setBoxes(copyBoxes)
    setIsXTurn(!isXTurn)
  };

  useEffect(()=>{
    if(isWinner){
      getTurn(isWinner, won)
    }
  }, [isWinner]);

  return (
    <div className="board">
      {boxes.map((values, index) => {
        return (
          <div key={index}>
            <Box values={values} index={index} handleIndex={handleIndex} getTurn={getTurn} count={count} />
          </div>
        );
      })}
    </div>
  )

}

export default Board;
