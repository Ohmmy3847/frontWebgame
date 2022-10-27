import axios from "axios";
// import { StudentCard } from "../student_card";

import React, { useEffect, useState } from "react";
// import MyChart from "../BarChar"
import SearchBar from "./filter_selecter";
import "./style.css";
import logo from "../../../true_Logo.png";
function isNum(val) {
  return !isNaN(val);
}

export function HomeSceen() {
  const [likedCount, setLikedCount] = useState("not ready");
  const [data, setdata] = useState([]);
  const [course, setcourse] = useState([]);
  const getStudent = async () => {
    const response = await axios.get(
      "https://webgamebackend.herokuapp.com/Game/"
    );

    const data = await response.data;

    // setdata(JSON.parse(JSON.stringify(data)));
    setdata(JSON.parse(JSON.stringify(data)));
    setLikedCount("ready");

    // console.log(JSON.stringify(data));
  };

  useEffect(() => {
    getStudent();
  }, []);
  console.log(data)

  return (
    <>
    
      {likedCount != "ready" ? (
        <><center>
          <div>
            <img src={logo} class="rotate" width="120" height="100" />
            <h2 style={{color:'white'}}>Loading...</h2>
          </div></center>
        </>
      ) : (<>
      <div>
      
      <h1 style={{color:"white",fontWeight:"bold",fontSize:"60px",marginLeft:"28.5%"}}>Scratch Game</h1></div>
        <SearchBar
        data={data}
      />
    </>
      )}
    </>
  );
}
