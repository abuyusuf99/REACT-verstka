import style from '../CSS/Buttons.module.css'

function Buttons() {
  return (
    <div className={style.buttons}>
        <button className={style.one}>Увеличить</button>
        <button className={style.two}>Уменьшить</button>
        <button className={style.three}>Сбросить</button>
    </div>
  )
}

export default Buttons