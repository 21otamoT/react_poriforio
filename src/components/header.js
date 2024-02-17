import { useState } from "react"
import { Link } from "react-scroll"

const Menu = () => {

  return(
    <>
      <li>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70} // スクロール時のオフセット調整
          duration={500} // スクロールにかかる時間（ミリ秒）
        >
          作品<br/>Works
        </Link>
      </li>
      <li>
        <Link 
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          スキル<br/>Skil
        </Link>
      </li>
      <li>
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          自己紹介<br/>Self-introduction
        </Link>
      </li>
      <li>
      <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        お問い合わせ<br/>Contact
      </Link>
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
            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              作品
            </Link>
          </li>
          <li>
            <span class="material-symbols-outlined">
              flutter
            </span>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            スキル
            </Link>
          </li>
          <li>
            <span class="material-symbols-outlined">
              person
            </span>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              自己紹介
            </Link>
          </li>
          <li>
            <span class="material-symbols-outlined">
              mail
            </span>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              お問い合わせ
            </Link>
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