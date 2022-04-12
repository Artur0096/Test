import menuStyles from "./Menu.module.css"
import React, {Component,useState} from 'react';
import Events from "./events/events.js"

export default function Menu(){

  const [toggle,setToggle] = useState(true)

  const handelClick = () =>{
    setToggle(!toggle);
  }

  return(
    <div className={menuStyles.menu_style}>
      <div className={menuStyles.menu_container}>
        <div className={menuStyles.menu_content}>
            <ul>
              <li>Home</li>
              <li>Scrims</li>
              <li>Recruitment Tools</li>
              <li>My Teams</li>
              <li>Overwatch Data</li>
              <li>
              Events
              <img src = "arrow.svg" onClick = {handelClick}/>
              </li>

              {toggle?
                <Events/>:null}
              <li >About</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
