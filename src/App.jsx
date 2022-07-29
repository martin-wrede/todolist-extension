import React, { useState } from "react";
 import Task from "./components/Task";
import "./App.css";

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);


  const handleFilter = (id) => {
    let filtered = taskList.filter((index) => {
     // console.log(id)
      return index.id !== id // filter index.id will be deleted when the current does not fit
    });
    setTaskList(filtered);
  };

  const addTask = () => {
    setIdCounter(idCounter + 1);
    setTaskList([...taskList, { task: taskName, time: time, id: idCounter }]);
    setTaskName("");
    setTime("");
  };

  return (
    <div className="App">
      <h3>todo list</h3>
      <div>
        <label>Task Name:</label>
        <br />
        <input
          type="text"
          id="task"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <br />
        <label>Time:</label>
        <br />
        <input
          type="text"
          id="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
        <br />
        <button onClick={addTask}>Add</button>
        <br />
 
        {taskList.map((index) => {
          return (
            <Task 
              taskName={index.task}
              time={index.time}
              id={index.id}
              func={handleFilter}
            />
          );
        })}
        <br />
 
      </div>
    </div>
  );
}
