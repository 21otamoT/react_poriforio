import '../../../css/works.css'

const Travel = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>民宿予約アプリ</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/toravel_long.png" alt="民宿予約アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://hirose-travel-7e6baef05a23.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://hirose-travel-7e6baef05a23.herokuapp.com/</a></p>
            <h3>使用技術</h3>
            <p>html/CSS/JavaScript/SpringBoot/SQL/Heroku</p>
            <h3>要件定義書</h3>
            <p><a href='https://www.figma.com/file/afHtlSdXOS7DnGiZN8JXEU/%E6%B0%91%E5%AE%BF%E3%82%A2%E3%83%97%E3%83%AA%E8%A6%81%E4%BB%B6%E5%AE%9A%E7%BE%A9%E6%9B%B8?type=design&node-id=0%3A1&mode=design&t=SPuLgqEem0csEALg-1' target='_blank' rel='noopener noreferrer'>https://www.figma.com/</a></p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              スクールの教材でJavaを学ぶ課程で作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              エラーの解決に苦労しました。<br />
              具体的にはstatus404や405,500などの初めて見るエラーや予約した情報が表示されないバグなどの修正です。<br />
              ただ教材と同じように作るのではなく、デザインを変えたり気になるコードを調べたり、メモを取りながら作成いたしました。
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

export default Travel