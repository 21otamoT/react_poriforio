import { Link } from 'react-scroll'
import '../../../css/works.css'
import salon from "../../../img/works/details/works-3.gif"

const Work3 = () => {
  return (
        <article className="article" id='move'>
              <div>
                <h2 className='work-title'>美容室のHP</h2>
                <div>
                  <p className='img-container'> 
                    <img src={salon} alt="works-3" />
                  </p>
                  <p>
                    ヘアーサロンのHPになります。
                  </p>
                  <h3>URL</h3>
                  <p></p>
                  <h3>担当</h3>
                  <p>WordPress構築・コーディング</p>
                  <h3>サイトの目的</h3>
                  <p>侍エンジニアからの課題</p>
                  <h3>使用技術</h3>
                  <p>WordPress</p>
                  <h3>デザインについて</h3>
                  <p>
                    20~30代の女性のお客様が多い店舗のため、お客様の層に最適な画像素材を使用しております。
                  </p>
                  <h3>コーディングについて</h3>
                  <p>
                    トップ画面での画像スライド、口コミ情報の表示、GoogleMapでの店舗所在地の表示、お問い合わせフォームなどを実装させていただいております。
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
export default Work3