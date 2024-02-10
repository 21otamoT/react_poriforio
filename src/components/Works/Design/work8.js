import '../../../css/works.css'

const Work8 = () => {
  return (
    <article class="article">
        <div>
          <h2 className='work-title'>ITスクールのバナー</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/samurai_banner.png" alt="work8" />
            </p>
            <p>
              ITスクールを手掛ける企業様のクリエイティブバナーになります。
            </p>
            <h3>URL</h3>
            <p><a href="" target="_blank" rel="noopener"></a></p>
            <h3>担当</h3>
            <p>デザイン</p>
            <h3>バナーの目的</h3>
            <p>侍エンジニアからの課題</p>
            <h3>使用技術</h3>
            <p>Figma</p>
            <h3>デザインについて</h3>
            <p>
              見出しに色をつけ見出しに関連することは文字を大きく太字にして目立たせました。
            </p>
          </div>
        </div>
        <div className='works'>
          <a href='#works'>作品一覧へ</a>
        </div>
    </article>
  )
}
export default Work8