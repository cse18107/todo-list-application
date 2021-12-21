import React from "react";
import "./Home.css";

const DUMMY_VALUE = [
  {
    title: "coding",
    description: "Leetcode question practice",
    date: "28/10/1998",
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
          {DUMMY_VALUE.map(() => {
              return (<div className="home-body__content-body">
            
                <div className="home-body__content-body__content">
                  <h1>
                    Title: <span>Coding</span>
                  </h1>
                </div>
             
          </div> );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
