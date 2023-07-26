import FooterLogo from "./Footerlogo"
import Footermenu from "./Footermenu"
import Copyrigtht from "./Copyright"
import style from '../CSS/Footer.module.css'
function Footer() {
  return (
    <div className={style.footer}>
      <FooterLogo />
      <Footermenu />
      <Copyrigtht />

    </div>
  )
}

export default Footer