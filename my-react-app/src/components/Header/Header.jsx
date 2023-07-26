import Logo from "./Logo"
import Menu from "./Menu"
import style from '../CSS/Header.module.css'
function Header() {
  return (
    <div className={style.header}>
      <Logo/>
      <Menu/>
      </div>
  )
}

export default Header