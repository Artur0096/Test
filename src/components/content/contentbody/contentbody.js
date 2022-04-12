import bodyStyles from "./Contentbody.module.css";
import React, {Component,useState} from 'react';

export default function Contentbody(){

  const [arr, setArr] = useState([
    {id:1, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"down.svg", meh:"meh.png"},
    {id:2, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"activeup.svg", down:"down.svg",meh:"mehempty.svg"},
    {id:3, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"activedown.svg", meh:"mehempty.svg"},
    {id:4, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"activedown.svg", meh:"mehempty.svg"},
    {id:5, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"activedown.svg", meh:"mehempty.svg"},
    {id:6, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"activedown.svg", meh:"mehempty.svg"},
    {id:7, name:"PandaChan vs DDRS", date:"Rocket League | NA-WEST Nov 11 | 5:00PM EST | 1 Hour", up:"up.svg", down:"activedown.svg", meh:"mehempty.svg"},
  ])

  return (
    <div className = {bodyStyles.contentbody_style}>
        <div className = {bodyStyles.contentbody_container}>
          <div className = {bodyStyles.contentbody_content}>
              <div className = {bodyStyles.contentbody_content_header}>
                <div className = {bodyStyles.contentbody_content_header_title}>
                    <h1>Scrim Review</h1>
                </div>
                <div className = {bodyStyles.contentbody_content_header_images}>
                  <img src = "dropleft.png" className = {bodyStyles.left_img}/>
                  <img src = "dropright.png"/>
                </div>
              </div>
              {arr.map((item) =>
            <div key = {item.id} className = {bodyStyles.contentbody_content_reviews}>
              <div className = {bodyStyles.contentbody_content_reviews_leftSide}>
                  <div className = {bodyStyles.contentbody_reviews_name}>
                    <p>{item.name}</p>
                  </div>
                  <div className = {bodyStyles.contentbody_reviews_date}>
                    <p>{item.date}</p>
                  </div>
              </div>
              {item.id<4?
              <div className = {bodyStyles.contentbody_content_reviews_rightide}>
                <img src = {item.up}/>
                <img src = {item.meh}/>
                <img src = {item.down}/>
                <img src = "Upload.svg"/>
              </div>:
              <div className = {bodyStyles.contentbody_content_reviews_secondrightide}>
                <h3>VIEW</h3>
                <img src = "rightarrow.png"/>
              </div>}
            </div>
          )}
          </div>
        </div>
    </div>
  );
}
