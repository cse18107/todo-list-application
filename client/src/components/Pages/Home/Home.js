import React,{useState,useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";


const Home = () => {
  const [tasks,setTasks] = useState([]);
  useEffect(()=>{getTask()},[]);

  const getTask = async() =>{
    
      const res = await fetch("http://localhost:8003/gettask",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Accept:"application",
        },
      });
      const data = await res.json();
      setTasks(data);

  }

  console.log(tasks);
  return (
    <div className="home-body">
      <div className="home-body__container">
        <div className="home-body__content">
          {tasks.map((value) => {
            return (
              <div className="home-body__content-body">
                <div className="card" style={{ width: "18rem" ,"border":`5px solid ${value.color}`}}>
                  <div className="card-body">
                    <div className="card-body-text-container">
                      <div className="card-body-text-content">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                      </div>
                    </div>
                    <div className="button-content">
                      <div className="buttons">
                        <Link
                          type="button"
                          to={`/edit-task/:${value.id}`}
                          class="btn btn-success"
                        >
                          Edit
                        </Link>
                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
