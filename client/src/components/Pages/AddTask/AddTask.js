import React,{useState} from "react";
import "./AddTask.css";
import { CirclePicker } from 'react-color';
import {useNavigate} from 'react-router-dom';
const AddTask = () => {

  const navigate = useNavigate();

    const [title,setTitle]  = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    // const [task,setTask] = useState({});
    const [color,setColor] = useState("");


    const setTitleHandler=(event)=>{
        setTitle(event.target.value);
    }

    const setDateHandler = (event) =>{
        setDate(event.target.value);
    }
    
    const setDescriptionHandler = (event) =>{
        setDescription(event.target.value);
    }

    const setTaskHandler =async () =>{
      console.log({title,description,date,color});
      const res = await fetch("http://localhost:8003/add", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          date,
          color
        }),
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      navigate("/");
        // setTask({title,description,date,color});
        setTitle("");
        setDescription("");
        setDate("");
        setColor("");
        // see();
    }

    const showColor=(color)=>{
        setColor(color.hex);
    }
    // const see = () =>{
    //   console.log(task)
    // }
  return (
    <div className="add-task__container">
      <div className="add-task__content">
        <form class="row g-3">
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Title
            </label>
            <input
              type="text"
              value={title}
              class="form-control"
              id="inputEmail4"
              onChange={setTitleHandler}
              placeholder="Any title of your task"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Description
            </label>
            <input
              type="text"
              value={description}
              class="form-control"
              id="inputEmail4"
              onChange={setDescriptionHandler}
              placeholder="Description of your task"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Date
            </label>
            <input
              type="text"
              value={date}
              class="form-control"
              id="inputEmail4"
              onChange={setDateHandler}
              placeholder="DD/MM/YYY"
            />
          </div>
           <label for="exampleColorInput" class="form-label">
            Color picker
          </label>
          <CirclePicker onChange={showColor}/>
          <div class="col-12">
          <button type="button" onClick={setTaskHandler} class="btn btn-success">Success</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
