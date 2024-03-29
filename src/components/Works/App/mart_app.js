import { Link } from 'react-scroll'
import '../../../css/works.css'
import hirosemart from "../../../img/works/hirose_mart.png"

const Mart = () => {
  return (
    <article className="article" id="move">
        <div>
          <h2 className='work-title'>商品管理アプリ</h2>
          <div>
            <p className='img-container'>
              <img src={hirosemart} alt="商品管理アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://hirose-mart-21a6b3410b59.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://hirose-mart-21a6b3410b59.herokuapp.com/</a></p>
            <h3>使用技術</h3>
            <p>html/CSS/PHP/SQL/Heroku</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              スクールの教材でPHPを学ぶ課程で作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              データベースのsql文でSQLSTATE[42000]: 構文エラーの解決に苦労しました。ただ教材と同じように作るのではなく、デザインを変えたり気になるコードを調べたり、メモを取りながら作成いたしました。
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

export default Mart