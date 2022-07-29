import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Text 1",
    },
    {
      id: 2,
      text: "Text 2",
    },
  ]);
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask=(task)=>{
const id=Math.floor(Math.random()*10000)+1
const newTask={id,...task}
setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
