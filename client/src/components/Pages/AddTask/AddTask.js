import React,{useState} from "react";
import "./AddTask.css";
import { CirclePicker } from 'react-color';
const AddTask = () => {

    

    const showColor=(color)=>{
        console.log(color.hex);
    }
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
              id="inputEmail4"
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
              placeholder="DD/MM/YYY"
            />
          </div>
           <label for="exampleColorInput" class="form-label">
            Color picker
          </label>
          <CirclePicker onChangeComplete={showColor}/>
          <div class="col-12">
          <button type="button" class="btn btn-success">Success</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
