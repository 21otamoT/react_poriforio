import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../img/yukihiro.png"

const Menu = () => {

  return(
    <>
      <li>
        <Link to="/works">作品<br/>Works</Link>
      </li>
      <li>
        <Link to="/skill">スキル<br/>Skill</Link>
      </li>
      <li>
        <Link to="/about">自己紹介<br/>About</Link>
      </li>
      <li>
      {/* <Link to="/contact">お問い合わせ<br/>Contact</Link> */}
      </li>
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
            <Link to="/works">作品</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">
              flutter
            </span>
            <Link to="/skill">スキル</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">
              person
            </span>
            <Link to="/about">自己紹介</Link>
          </li>
          {/* <li>
            <span className="material-symbols-outlined">
              mail
            </span>
            <Link to="/contact">お問い合わせ</Link>
          </li> */}
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
        <h1 className="home"><Link to="/"><img src={logo} alt="meinvisual"/></Link></h1>
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