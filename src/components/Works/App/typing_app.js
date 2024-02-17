import '../../../css/works.css'

const Typing = () => {
  return (
    <article class="article">
        <div>
          <h2 className='work-title'>タイピングゲーム</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/typing_game.png" alt="タイピングゲーム" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/typing_game/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/typing_game/</a></p>
            <h3>使用技術</h3>
            <p>HTML/CSS/JavaScript</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              プログラミングスクールの教材でJavaScriptの学習のために作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              タイプするテキストをJavaScriptのメソッド名にして遊びながらJavaScriptを学べるようにして
              教材とはデザインをかえて星が降るアニメーションを追加したことでプレイ中の躍動感が増しました。<br />
              学び始めたばかりの頃だったので綴りミスでエラーになることが多く、エラーの解決に時間がかかりました。
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

export default Typing