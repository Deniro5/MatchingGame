import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    
    return (
      <div className = "homeContainer">
        <div className = "buttonContainer">
          <h1 className = "title"> Matching Game </h1>
          <p style = {{fontWeight: "bold", fontSize: "24px", marginBottom: "15px"}}> Instructions: </p>  
          <p> Find all matching pairs before the timer runs out! Select a difficulty below to start. </p>
          <Link to = "/easy">
            <button id = "easyBtn"> Easy </button>
          </Link>
          <Link to = "/medium">
            <button id = "mediumBtn"> Medium </button>
          </Link>
          <Link to = "/hard">
            <button id = "hardBtn"> Hard </button>
          </Link>
        </div> 
      </div>
    );
  }

export default Home;
