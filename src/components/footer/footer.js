import footerStyles from "./Footer.module.css";

export default function Footer(){
  return(
    <div className = {footerStyles.footer_style}>
      <div className = {footerStyles.footer_container}>
        <div className = {footerStyles.footer_content}>
            <div className ={footerStyles.footer_content_leftSide}>
                <img src = "logo.svg"/>
                <div className = {footerStyles.footer_content_leftSide_menu}>
                  <ul>
                    <li>©2022 Champria.gg</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
            </div>
            <div className = {footerStyles.footer_content_rightSide_menu}>
              <ul>
                <li>Connect with us</li>
                <li><img src = "mess.svg"/></li>
                <li><img src = "facebook.png"/></li>
                <li><img src = "twitter.svg"/></li>
                <li><img src = "instagram.svg"/></li>
                <li><img src = "linkedin.svg"/></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
