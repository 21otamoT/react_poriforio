import '../../../css/works.css'

const Postal = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>住所検索アプリ</h2>
          <div>
            <p className='img-container'>
              <img src="../img/works/js-postal-code.png" alt="住所検索アプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/postal-code-app/" target="_blank" rel="noopener">https://21otamot.github.io/postal-code-app/</a></p>
            <h3>使用技術</h3>
            <p>html/CSS/JavaScript/</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              スクールのイベント、SAMURAIコミュニティにてAPIの叩き方のセミナーがあったのでその成果物です。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              セミナーを聞きながらプログラミングをしたのでついていく事に苦労しました。<br />
              途中でエラーになりましたが気にせず最後までプログラミングし解説を聞きながらchatGPTを使ってエラーを解決いたしました。
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

export default Postal