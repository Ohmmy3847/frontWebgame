import { getToPathname } from "@remix-run/router";
import React, { useEffect, useState } from "react";

import "./style.css";

function SearchBar(data) {
  const [coursenamelist, setcoursenamelist] = useState([]);
  const [courseidset, setcourseidset] = useState([]);
  const [fileredData, setFilteredData] = useState([]);
  const [name, setname] = useState("");
  const [navbarState, setNavbarState] = useState(false);
  const [usecourse, setusecourse] = useState("");
  const [gamename, setgamename] = useState([]);
  const [index, setindex] = useState(0);
  console.log(data);
  useEffect(() => {
    let Raw = data.data.map((d, index) => {
      return d.Gamename;
    });
    setgamename(Array.from(new Set(Raw)).sort());
  }, []);

  const handleFIlter = (event) => {
    const searchWord = event.target.value;

    setname(searchWord);
  };

  if (name == "") {
    var s = data.data.filter(function (i, n) {
      return i;
    });
  } else {
    var s = data.data.filter(function (i, n) {
      return i.Gamename.includes(name);
    });
  }
  console.log(s);
  return (
    <>
      <div className="searchInputs">
        <center>
          <div className="head">
            <input
              list="list"
              id="getname"
              type="text"
              placeholder="Search Game"
              value={name}
              onChange={handleFIlter}
              autoComplete="off"
            />
            <datalist id="list">
              {gamename.map((n, i) => {
                return <option>{n}</option>;
              })}
            </datalist>
            <br />
            <br />
          </div>

          <br />

          {s.map((n, i) => {
            return (
              <>
                <div className="Gametable" onClick={(e) => setindex(i)}>
                  <img
                    src={n.Image}
                    style={{ width: "70%", borderRadius: "4px" }}
                  />
                  <b>
                    <p>{n.Gamename}</p>
                  </b>
                </div>
              </>
            );
          })}
        </center>
      </div>
        
      <div className="Game">
        <h1 style={{ color: "white",marginLeft:"31%"}}>
          {s[index] == undefined ? "None" : s[index].Gamename}
        </h1>
        <iframe
          src={s[index] == undefined ? undefined : s[index].Link}
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default SearchBar;
