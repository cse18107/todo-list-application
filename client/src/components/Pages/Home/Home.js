import React from "react";
import "./Home.css";

const DUMMY_VALUE = [
  {
    title: "coding",
    description: "Leetcode question practice",
    date: "28/10/1998",
  },
  {
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    title: "cooking",
    description: "Kosa mangso",
    date: "30/2/2020",
  },
  {
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    title: "coding",
    description: "Leetcode question practice",
    date: "28/10/1998",
  },
  {
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
    title: "Study",
    description: "Operating System",
    date: "23/4/2021",
  },
  {
    title: "cooking",
    description: "Kosa mangso",
    date: "30/2/2020",
  },
  {
    title: "Watching TV",
    description: "Tom and Jerry",
    date: "10/10/2022",
  },
  {
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
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <div className="buttons">
                    <button type="button" class="btn btn-success">
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
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
