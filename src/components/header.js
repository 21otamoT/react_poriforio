import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../img/yukihiro.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faSun, faImagePortrait } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {

  return(
    <>
      <li>
        <NavLink to="/works" style={({isActive}) => {
          return isActive ? {color: 'rgb(221, 240, 135)'}: {}
        }}>作品<br/>Works</NavLink>
      </li>
      <li>
        <NavLink to="/skill" style={({isActive}) => {
          return isActive ? {color: 'rgb(221, 240, 135)'}: {}
        }}>スキル<br/>Skill</NavLink>
      </li>
      <li>
        <NavLink to="/about" style={({isActive}) => {
          return isActive ? {color: 'rgb(221, 240, 135)'}: {}
        }}>自己紹介<br/>About</NavLink>
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
            <Link to="/works">作品</Link>
            <FontAwesomeIcon icon={faSun} style={{color: 'white'}}/>
          </li>
          <li>
            <Link to="/skill">スキル</Link>
            <FontAwesomeIcon icon={faLaptopCode} style={{color: 'white'}}/>
          </li>
          <li>
            <Link to="/about">自己紹介</Link>
            <FontAwesomeIcon icon={faImagePortrait} style={{color: 'white'}}/>
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
        <h1 className="home"><Link to="/"><img src={logo} alt="logo"/></Link></h1>
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