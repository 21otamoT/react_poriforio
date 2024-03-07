import { Link } from 'react-scroll'
import '../../../css/works.css'
import socialtech from "../../../img/works/details/works-1.png"

const Work1 = () => {
  return (

      <article className="article" id='move'>
        <div>
          <h2 className='work-title'>コーポレートサイト</h2>
          <div>
            <p className='img-container'>
              <img src={socialtech} alt="socialtech" />
            </p>
            <p>
                5ページから構成される企業様のHPです。
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/socialtech/" target="_blank" rel="noopener noreferrer">  https://21otamot.github.io/socialtech/</a></p>
            <h3>担当</h3>
            <p>  コーディング</p>
            <h3>サイトの目的</h3>
            <p>  侍エンジニアからの課題</p>
            <h3>使用技術</h3>
            <p>  HTML/CSS/JavaScript/jQuery</p>
            <h3>  デザインについて</h3>
            <p>
                企業様のブランドカラーを基調としたサイトデザインをさせていただきました。使用カラーも4色（青・白・黒・グレー）のみとし、サイト全体の統一感を出させていただきました。
            </p>
            <p>
                グローバルナビゲーション（上部メニュー）を押したときの自動スクロール処理。また、お問い合わせフォームは企業様のメールへ送信される処理を実装しております。
            </p>
            <h3>コーディングについて</h3>
            <p>
                PCのWebサイト制作はもちろんのこと、スマートフォンでも見やすくするためレスポンシブ対応を施しております。
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
export default Work1