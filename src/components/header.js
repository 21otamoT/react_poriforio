

const Menu = () => {
  return(
    <>
      <li><a href="#works">作品<br/>Works</a></li>
      <li><a href="#skil">スキル<br/>Skil</a></li>
      <li><a href="#about">自己紹介<br/>Self-introduction</a></li>
      <li><a href="#contact">お問い合わせ<br/>Contact</a></li>
    </>
  )
}

const Header = () => {
  return(
    <header>
        <h3><a href="#">HOME</a></h3>
        <nav>
          <ul>
            <Menu/>
          </ul>
        </nav>
    </header>
  )
}
export default Header;