import headerStyles from "./Header.module.css";

export default function Header() {
  return(
    <div className = {headerStyles.header_style}>
      <div className = {headerStyles.header_container}>
          <img src = "/LOGO.png"/>
      </div>
    </div>
  );
}
