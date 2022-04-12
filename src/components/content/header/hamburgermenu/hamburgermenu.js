import hamburgermenuStyles from "./Hamburgermenu.module.css";
import React, {Component, useState} from 'react';
import Eventslist from "./eventslist/eventslist.js"

export default function Hamburgermenu() {

    const [toggle, setToggle] = useState(false)
    const handelClick = () =>{
      setToggle(prevstate => !prevstate)
    }


    return(
      <div className = {hamburgermenuStyles.hamburger_menu_style}>
        <div className = {hamburgermenuStyles.hamburger_menu_container}>
            <div className = {hamburgermenuStyles.hamburger_menu_content}>
              <div className = {hamburgermenuStyles.hamburger_menu_logo}>
                  <img src = "/LOGO.png"/>
              </div>
              <div className = {hamburgermenuStyles.hamburger_menu_list}>
                  <ul>
                      <li>Home</li>
                      <li>Scrims</li>
                      <li>Recruitment Tools</li>
                      <li>My Teams</li>
                      <li>Overwatch Data</li>
                      <li>
                      Events
                      <img src = "arrow.svg"  onClick = {handelClick}/>
                      </li>
                        {toggle?
                        <Eventslist/>:
                        null}
                      <li >About</li>
                      <li>Blog</li>
                      <li>Contact Us</li>
                      </ul>
              </div>
            </div>
        </div>
      </div>
    )
}
