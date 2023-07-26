import style from '../CSS/Menu.module.css'
function Menu() {
  return (
    <div className={style.menu}>
        <a href="#" className={style.a}>Главная</a>
        <a href="#" className={style.a}>О нас</a>
        <a href="#" className={style.a}>Контакты</a>
        </div>
  )
}

export default Menu