import { Link } from 'react-scroll'
import '../../../css/works.css'
import work from '../../../img/works/details/works-4.png'

const Work4 = () => {
  return (
    <article class="article" id='move'>
        <div>
          <h2 className='work-title'>ITスクールのバナー</h2>
          <div>
            <p className='img-container'>
              <img src={work} alt="work4" />
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
              メインターゲットが女性であることを考慮した配色をさせていただきました。
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
export default Work4