import { Link } from 'react-scroll'
import '../../../css/works.css'
import profile from "../../../img/works/details/works-2_pc.png"

const Work2 = () => {
  return (
        <article className="article" id='move'>
            <div>
              <h2 className='work-title'>プロフィールサイト</h2>
              <div>
                <p className='img-container'>
                  <img src={profile} alt="html2" />
                </p>
                <p>
                  カメラマンのお客様のプロフィールサイトになります。
                </p>
                <h3>URL</h3>
                <p><a href="https://21otamot.github.io/jQuery_profile/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/jQueryMyprofile/</a></p>
                <h3>担当</h3>
                <p>コーディング</p>
                <h3>サイトの目的</h3>
                <p>侍エンジニアからの課題</p>
                <h3>使用技術</h3>
                <p>HTML/CSS/JavaScript/jQuery</p>
                <h3>デザインについて</h3>
                <p>
                  スクロールなしですぐに情報が読み取れるよう、1枚のページに情報をまとめております。
                </p>
                <h3>コーディングについて</h3>
                <p>
                  シンプルなデザインなので、画像類のデータがございましたら2~3日程度で作成することができます。
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
export default Work2