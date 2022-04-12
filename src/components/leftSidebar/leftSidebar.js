import React, {Component} from 'react';
import Header from "./header/header.js"
import Menu from "./menu/menu.js"
import leftsidebarStyles from "./Leftsidebar.module.css";

export default function Leftsidebar(){
  return(
    <div className = {leftsidebarStyles.leftsidebar_style}>
      <Header/>
      <Menu/>
    </div>
  )
}
