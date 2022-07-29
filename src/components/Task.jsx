import React, { useEffect } from "react";
import "../App.css";

export default function task({ taskName, time, id, func }) {
  /*
  useEffect(() => {
    console.log("Calling func");
    func();
  }, [func]);
*/
  return (
    <div className="task" id={id}>
      <div className="delete">
        
        {id}
        <button 
        onClick={() =>{ func(id)}} 
        > [-]</button>
        </div>
      
      <h3>Taskname: {taskName}</h3>
      <h3>Time: {time}</h3>
    </div>
  );
}

 

