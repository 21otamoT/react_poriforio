import { Link } from 'react-scroll'
import '../../../css/works.css'
import order from "../../../img/works/details/spring_order.png"

const Order = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>注文アプリ</h2>
          <div>
            <p className='img-container'>
              <img src={order} alt="注文アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://hirosekafe-order-1bf0315d9e13.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://hirosekafe-order-1bf0315d9e13.herokuapp.com/</a></p>
            <h3>使用技術</h3>
            <p>html/CSS/JavaScript/SpringBoot/SQL/Heroku</p>
            <h3>要件定義書</h3>
            <p><a href='https://www.figma.com/file/ObmoyGhwGDNeZxI37qqo4i/%E7%84%A1%E9%A1%8C?type=design&node-id=0%3A1&mode=design&t=shHQZGb5ZHYJLKlE-1' target='_blank' rel='noopener noreferrer'>https://www.figma.com/</a></p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              外食をした時に店員さんが注文をメモしているのを見て、タブレットでできたらいいなと思い制作いたしました。<br/>
              業務システムか、基幹システムになると思うので、無難なJavaを選びました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              カート機能の実装に苦労しました。<br/>
              実装したことがない機能で、かつ、教材にもない機能なので調べながら実装いたしました。<br/>
              店員さんが使うことを意識して制作したので注文はログイン無しでできるようにし、メニューの追加、削除はログインした管理者のみができるようにいたしました。
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

export default Order