import { useState } from "react"

const Menu = () => {

  return(
    <>
      <li><a href="#works">作品<br/>Works</a></li>
      <li><a href="#skill">スキル<br/>Skil</a></li>
      <li><a href="#about">自己紹介<br/>Self-introduction</a></li>
      <li><a href="#contact">お問い合わせ<br/>Contact</a></li>
    </>
  )
}

const Hmbarger = () => {
  const [active, setActive] = useState('')

  const handleClick = () => {
    active === '' ? setActive('active') : setActive('')
  }
  return (
      <div className={"hmenu"+active}>
        <ul>
          <li>
            <span className="material-symbols-outlined">
              computer
            </span>
            <a href="#works">作品</a>
          </li>
          <li>
            <span class="material-symbols-outlined">
              flutter
            </span>
            <a href="#skill">スキル</a>
          </li>
          <li>
            <span class="material-symbols-outlined">
              person
            </span>
            <a href="#about">自己紹介</a>
          </li>
          <li>
            <span class="material-symbols-outlined">
            mail
            </span>
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>
        <div className='hmbtn' onClick={handleClick}>
        <span className={active}></span>
        <span className={active}></span>
        <span className={active}></span>
        </div>
      </div>
      
  )
}

const Header = () => {
  return(
    <header>
        <h1 className="home"><a href="#"><img src="../img/yukihiro.png" /></a></h1>
        <nav>
          <ul className="header-menu">
            <Menu/>
          </ul>
        </nav>
        <Hmbarger />
    </header>
  )
}
export default Header;