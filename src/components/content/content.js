import Header from "./header/header.js";
import contentSyles from "./Content.module.css";
import Contentbody from "./contentbody/contentbody.js"
export default function Content (){
  return(
    <div className = {contentSyles.content_style}>
      <Header/>
      <Contentbody/>
    </div>
  )
}
