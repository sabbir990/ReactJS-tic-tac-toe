import React from "react";
import '../index.css';
function TurnShower({ count }){
    return(
        <div className="turn">
            <div className={`turnX ${count % 2 === 0 && "X"}`}>
                X
            </div>
            <div className={`turn0 ${count % 2 !== 0 && "Y"}`}>
                0
            </div>
        </div>
    )
}
export default TurnShower;