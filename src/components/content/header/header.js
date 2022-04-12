import headerStyles from "./Header.module.css";
import React, {Component, useState,useEffect} from 'react';
import Hamburgermenu from "./hamburgermenu/hamburgermenu.js"

export default function Header(){
    const windwidth = window.innerWidth;
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
};

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

    const handelClick = () =>{
      setToggle(prevstate =>!prevstate);
      console.log(toggle);
      console.log(windwidth)
      if(toggle){
        document.body.style.overflow = "visible"
      }
      else{
        document.body.style.overflow = "hidden"
      }
    }



    return(
      <div className = {headerStyles.header_style}>
        <div className = {headerStyles.header_container}>
          <div className = {headerStyles.header_content}>
            <div className = {headerStyles.header_content_header}>
                <div className = {headerStyles.hamburger_button}>
                  <button onClick = {handelClick}>
                    <img src = "bamburger.svg"/>
                  </button>
                </div>
                <div className = {headerStyles.right_menu}>
                  <img src = "Search.svg"/>
                  <div className = {headerStyles.header_notification}>
                    <img src = "Notifications.svg"/>
                  </div>
                  <div className = {headerStyles.header_user}>
                    <img src = "user.svg"/>
                    <img src = "secondarrow.svg"/>
                    </div>
                  </div>
                </div>
                {toggle && width < '1060'?
                <Hamburgermenu/>
                :null}
            <div className = {headerStyles.header_scrims}>
              <div className = {headerStyles.header_scrims_title}>
                  <h1>My Scrims</h1>
              </div>
              <div className = {headerStyles.header_scrims_form}>
                <form>
                  <select>
                    <option>Team Name</option>
                    <option>item 1</option>
                    <option>item 2</option>
                    <option>item 3</option>
                  </select>
                </form>
                <div className = {headerStyles.header_scrims_form_button}>
                  <button>
                    Create Scrim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
