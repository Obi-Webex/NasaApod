import React from "react";
import "./nav.css";
import nasa from "../Active/nasa.png";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <ul className='lista'>
        <img src={nasa} alt='' width='180' height='90' />
        <Link to='/'>
          <li>Take Me Home</li>
        </Link>
      </ul>
    </div>
  );
}
