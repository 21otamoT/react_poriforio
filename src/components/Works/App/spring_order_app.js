import '../../../css/works.css'

const Order = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>注文アプリ</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/spring_order.png" alt="注文アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://hirosekafe-order-1bf0315d9e13.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://hirosekafe-order-1bf0315d9e13.herokuapp.com/</a></p>
            <h3>使用技術</h3>
            <p>html/CSS/JavaScript/SpringBoot/SQL/Heroku</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              外食をした時に店員さんがタブレットで決済をしていたのを見て注文もタブレットでできたらいいなと思い制作いたしました。
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
            arrow_upward
          </span>
          <a href='#works'>作品一覧へ</a>
        </div>
      </article>
  )
}

export default Order