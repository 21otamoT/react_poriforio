import { Link } from 'react-scroll'
import '../../../css/works.css'
import reactmenu from "../../../img/works/details/menu_app_long.png"

const Menu = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>メニュー計算アプリ</h2>
          <div>
            <p className='img-container'>
              <img src={reactmenu} alt="メニュー計算アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/react_menu_app/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/typing_game/</a></p>
            <h3>使用技術</h3>
            <p>CSS/React</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              プログラミングスクールのレッスンでReactの基礎を教えてもらったのでアウトプットのために作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              MenuとAppにコンポーネントを分けて一つのUIになるようにしたこととuseStateフックを使い追加したメニューの金額の合計がレンダリングされるようにしました。<br />
              sueStateに値はセットされていますが表示が変わらないバグの解決に苦労しました。
            </p>
          </div>
        </div>
        <div className='works'>
          <span class="material-symbols-outlined">
          &#9651;
          </span>
          <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >作品一覧へ</Link>
        </div>
      </article>
  )
}

export default Menu