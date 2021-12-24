import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const DUMMY_VALUE = [
  {
    id:'1',
    title: "coding",
    description: "Leetcode question practice",
    date: "28/10/1998",
  },
  {
    id:'2',
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    id:'3',
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    id:'4',
    title: "cooking",
    description: "Kosa mangso",
    date: "30/2/2020",
  },
  {
    id:'5',
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    id:'6',
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    id:'7',
    title: "coding",
    description: "Leetcode question practice",
    date: "28/10/1998",
  },
  {
    id:'8',
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    id:'9',
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    id:'10',
    title: "cooking",
    description: "Kosa mangso",
    date: "30/2/2020",
  },
  {
    id:'11',
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    id:'12',
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
];

const Home = () => {
  return (
    <div className="home-body">
      <div className="home-body__container">
        <div className="home-body__content">
          {DUMMY_VALUE.map((value) => {
            return (
              <div className="home-body__content-body">
                <div className="card" style={{ width: "18rem" ,"border":"5px solid red"}}>
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
