import React, { useState } from "react";
import './Languages.css'
import { Link } from "react-router-dom";

const Languages = () => {
const [text, setText] = useState("English")
const [flag, setFlag] = useState("flag-icon-us")
const english = ()=>{
  setText("English")
  setFlag("flag-icon-us")
}
const french = ()=>{
  setText("French")
  setFlag("flag-icon-fr")
}
const german = ()=>{
  setText("German")
  setFlag("flag-icon-de")
}

const portuguese = ()=>{
  setText("Portuguese")
  setFlag("flag-icon-pt")
}

  return (
    <>
      <li className="nav-item dropdown dropdown-language">
        <Link
          className="nav-link dropdown-toggle"
          id="dropdown-flag"
          to="/"
          data-toggle="dropdown">
          <i className={`flag-icon ${flag}`}></i>
          <span className="selected-language">{text}</span>
        </Link>
        <div
          className="dropdown-menu dropdown-menu-right" style={{top : "48px"}}
          aria-labelledby="dropdown-flag" 
        >
          <Link
            className="dropdown-item"
            to="/"
            data-language="en"
            onClick={english}
    >
            <i className="flag-icon flag-icon-us"></i> English
          </Link>
          <Link
            className="dropdown-item"
            to="/"
            data-language="fr"
            onClick={french}
          >
            <i className="flag-icon flag-icon-fr"></i>
            French
          </Link>
          <Link
            className="dropdown-item"
            to="/"
            data-language="de"
            onClick={german}
          >
            <i className="flag-icon flag-icon-de"></i> German
          </Link>
          <Link
            className="dropdown-item"
            to="/"
            data-language="pt"
            onClick={portuguese}
   >
            <i className="flag-icon flag-icon-pt"></i>
            Portuguese
          </Link>
        </div>
      </li>
    </>
  );
};

export default Languages;
