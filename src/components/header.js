

const Menu = () => {
  const handleClick = e => {
    e.preventDefault()
  }

  return(
    <>
      <li><a href="#works">作品<br/>Works</a></li>
      <li><a href="#skill">スキル<br/>Skil</a></li>
      <li><a href="#about">自己紹介<br/>Self-introduction</a></li>
      <li><a href="#contact">お問い合わせ<br/>Contact</a></li>
    </>
  )
}

const Header = () => {
  return(
    <header>
        <h1 className="home"><a href="#">HOME</a></h1>
        <nav>
          <ul className="header-menu">
            <Menu/>
          </ul>
        </nav>
    </header>
  )
}
export default Header;