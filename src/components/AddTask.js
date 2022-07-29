import React from "react";
import { useState } from "react";
const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const onSubmit=(e)=>{
    e.preventDefault()

    if(!text)
    {
      alert('Please add a task')
      return
    }
    onAdd({text,day})
    setText('')
    setDay('')
    


  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Day and Time </label>
        <input
          type="text"
          placeholder="Add"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
