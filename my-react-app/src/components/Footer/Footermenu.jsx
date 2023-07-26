import style from '../CSS/Footermenu.module.css'
function Footermenu() {
  return (
    <div className={style.footermenu}>
        <a href="#" className={style.b}>Партнерам</a>
        <a href="#"className={style.b}>Разработичкам</a>
        <a href="#"className={style.b}>Вакансии</a>
    </div>
  )
}

export default Footermenu