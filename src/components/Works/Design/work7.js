import { Link } from 'react-scroll'
import '../../../css/works.css'

const Work7 = () => {
  return (
    <article class="article" id='move'>
        <div>
          <h2 className='work-title'>ITスクールのバナー</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/design_laugh.png" alt="work7" />
            </p>
            <p>
              ITスクールを手掛ける企業様のクリエイティブバナーになります。
            </p>
            <h3>URL</h3>
            <p></p>
            <h3>担当</h3>
            <p>デザイン</p>
            <h3>バナーの目的</h3>
            <p>侍エンジニアからの課題</p>
            <h3>使用技術</h3>
            <p>Adobe Photoshop</p>
            <h3>デザインについて</h3>
            <p>
              全体的に角を取ることで優しい印象を持たせました。
            </p>
          </div>
        </div>
        <div className='works'>
          <span class="material-symbols-outlined">
            arrow_upward
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
export default Work7