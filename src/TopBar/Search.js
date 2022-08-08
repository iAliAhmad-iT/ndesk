import React from "react";
import './Search.css'
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <>
      <li className="nav-item nav-search">
        <Link className="nav-link nav-link-search" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-search ficon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </Link>
      </li>
    </>
  );
};

export default Search;
