const Works = (onTabchange) => {
  return(
    <ul className="tab-menu">
      <li><a onClick={() => onTabchange(0)}>サイト</a></li>
      <li><a onClick={() => onTabchange(1)}>アプリ</a></li>
      <li><a onClick={() => onTabchange(2)}>デザイン</a></li>
    </ul>
  )
}

export default Works;