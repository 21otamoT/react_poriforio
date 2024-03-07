import { Link } from 'react-scroll'
import '../../../css/works.css'
import work from '../../../img/works/details/samurai_banner.png'

const Work8 = () => {
  return (
    <article class="article" id='move'>
        <div>
          <h2 className='work-title'>ITスクールのバナー</h2>
          <div>
            <p className='img-container'>
              <img src={work} alt="work8" />
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
            <p>Figma</p>
            <h3>デザインについて</h3>
            <p>
              見出しに色をつけ見出しに関連することは文字を大きく太字にして目立たせました。
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
export default Work8