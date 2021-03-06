import React,{useState,useEffect} from "react";
import "./EditTask.css";
import {useParams,useNavigate} from 'react-router-dom';
import { CirclePicker } from 'react-color';
const EditTask = () => {

    const [title,setTitle]  = useState("");
    const [description,setDescription] = useState("");
    const [date,setDate] = useState("");
    const [task,setTask] = useState({});
    const [color,setColor] = useState("");
  const navigate = useNavigate();
    const {id} = useParams("");
    console.log(id);

    const getTask = async() => {
      try{
        const res =await fetch(`http://localhost:8003/gettask/${id}`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
          }
          
        });

        const data= await res.json();
        console.log(data);
        setTask(data);
      }catch(error){
        console.log(error);
      }
    }
    useEffect(()=>{getTask()},[]);
    const setTitleHandler=(event)=>{
        setTitle(event.target.value);
    }

    const setDateHandler = (event) =>{
        setDate(event.target.value);
    }
    
    const setDescriptionHandler = (event) =>{
        setDescription(event.target.value);
    }

    const setTaskHandler = async() =>{
        //setTask({title,description,date,color});
      const res= await fetch(`http://localhost:8003/updatetask/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          title,
          description,
          date,
          color
        })
      });
        const data = await res.json();
        console.log(data);
        navigate("/");
    }

    const showColor=(color)=>{
        setColor(color.hex);
    }
    console.log(task);
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
              class="form-control"
              value={task.title}
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
              class="form-control"
              id="inputEmail4"
              value={task.description}
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
              class="form-control"
              id="inputEmail4"
              value={task.date}
              onChange={setDateHandler}
              placeholder="DD/MM/YYY"
            />
          </div>
           <label for="exampleColorInput" class="form-label">
            Color picker
          </label>
          <CirclePicker onChangeComplete={showColor}/>
          <div class="col-12">
          <button type="button" onClick={setTaskHandler} class="btn btn-success">Success</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
