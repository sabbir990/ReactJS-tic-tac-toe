import React, { useEffect, useState } from "react";
import './index.css';
import Board from "./components/board";
import TurnShower from "./components/turnShower";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [count, setCount] = useState(null);
  const [ifWin, setIfWin] = useState(false);
  const [winner, setWinner] = useState(null);
  const [move, setMove] = useState(false);

  const getTurn = (isWinner, winTrue) => {
    setCount(count + 1);
    setIfWin(winTrue);
    setWinner(isWinner);
  }
  
  const handleWin = () => {
    if(winner !== null){
      toast.success(`Game over! The Winner is ${winner}`);
    }
  };
  useEffect(() => {
    if (ifWin) {
      console.log("Game Over!");
      console.log("The winner is : ", winner)
      handleWin();
      setMove(true);
      setTimeout(()=>{
        setMove(false)
      }, 4500)
    }
  }, [ifWin]);

  const handleReset = () => {
    location.reload(true)
  }

  return (
    <div className="container">
      <ToastContainer autoClose={3000} position="top-center"/>
      <div className={`turn-shower ${move && "moved-turn"}`}>
        <TurnShower count={count} />
      </div>
      <div className="board-div">
        <Board boxes={boxes} setBoxes={setBoxes} getTurn={getTurn} count={count} setIfWin={setIfWin}/>
      </div>
      <div className="btn-div">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
