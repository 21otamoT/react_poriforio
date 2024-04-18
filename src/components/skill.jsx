import '../css/skill.css'
import html from "../img/skills/html.png"
import css from "../img/skills/icons8-css-480.png"
import javascript from "../img/skills/js.png"
import jquery from "../img/skills/jquery.png"
import php from "../img/skills/icons8-php-80.png"
import ts from "../img/skills/Typescript.svg"
import java from "../img/skills/java_original_wordmark_logo_icon_146459.svg"
import spring from "../img/skills/icons8-spring-logo.svg"
import sql from "../img/skills/icons8-mysql.svg"
import react from "../img/skills/icons8-react-native.svg" 
import figma from "../img/skills/icons8-figma-144.png"
import photoshop from "../img/skills/photoshop.png"
import wordpress from "../img/skills/wordpress.png"

const Skill = () => {
  return(
    <section id='skill'>
      <div className="container">
          <h2>スキル</h2>
          <div className="skill-list">
            <div className="skill-item">
              <p className="skill-img"><img src={html} alt="html" /></p>
              <div className="skill-body">
                <h3 className="skill-name">HTML</h3>
                <p className="skill-text">
                  Webページを作成するためのマークアップ言語でwebページを制作できます。
                </p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><a target="_blank" href="https://icons8.com"><img src={css} alt="css" /></a></p>
              <div className="skill-body">
                <h3 className="skill-name">CSS</h3>
                <p className="skill-text">
                  Chrome のデベロッパーツールでデザインの微調整ができ、
                  idやclassを付与して目的のスタイルを充てることができます。<br />
                  CSSでレスポンシブデザインの実装もできます。
                </p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><img src={javascript} alt="javascript" /></p>
              <div className="skill-body">
                <h3 className="skill-name">JavaScript</h3>
                <p className="skill-text">
                  動きのあるWebページを作る事が可能です。<br />
                  Todoリストの制作や教材を使ってタイピングゲームを作成いたしました。
                </p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><a target="_blank" href="https://icons8.com"><img src={ts} alt="Typescript" /></a></p>
              <div className="skill-body">
                <h3 className="skill-name">Typescript</h3>
                <p className="skill-text">
                  基礎を習得し、ToDoアプリを制作いたしました。
                </p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><img src={jquery} alt="jquery" /></p>
              <div className="skill-body">
                <h3 className="skill-name">jQuery</h3>
                <p className="skill-text">
                  JavaScriptのライブラリでJavaScriptを、簡潔に記述できます。<br />
                  version:jQuery3.7.1<br />
                </p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><a target="_blank" href="https://icons8.com/icon/123603/react-native"><img src={react} alt="React" /></a></p>
              <div className="skill-body">
                <h3 className="skill-name">React</h3>
                <p className="skill-text">
                  JavaScriptのライブラリでユーザーインターフェースを構築できます。<br />
                  Todoリストやメニュー計算アプリ、三目並べを制作いたしました。
                  version:18.2.0
                </p>
              </div>
            </div>
          <div className="skill-item">
            <p className="skill-img"><img src={java} alt="Java" /></p>
            <div className="skill-body">
              <h3 className="skill-name">Java</h3>
              <p className="skill-text">
                OSに依存しない汎用性の高さが魅力です。<br />
                基礎を習得し教材を使って民宿予約アプリを制作いたしました。<br />
                version:Java 21
              </p>
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-img"><a target="_blank" href="https://icons8.com/icon/90519/%E6%98%A5%E3%81%AE%E3%83%AD%E3%82%B4"><img src={spring} alt="SpringBoot" /></a></p>
            <div className="skill-body">
              <h3 className="skill-name">SpringBoot</h3>
              <p className="skill-text">
                Javaのフレームワークです。<br />
                基礎を習得し教材を使って民宿予約アプリを制作いたしました。<br />
                version:3.2.1
              </p>
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-img"><img src={php} alt="php" /></p>
            <div className="skill-body">
              <h3 className="skill-name">PHP</h3>
              <p className="skill-text">
                動的なWebページを作成するための機能を備えた言語です。<br />
                PHPの基礎を習得し教材を使って大学のホームページをWordPress化したり、
                教材を使って商品管理アプリを制作いたしました。<br />
                version:PHP 7.2.24
                </p> 
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-img"><a target="_blank" href="https://icons8.com/icon/UFXRpPFebwa2/mysql-%E3%83%AD%E3%82%B4"><img src={sql} alt="MySQL" /></a></p>
            <div className="skill-body">
              <h3 className="skill-name">MySQL</h3>
              <p className="skill-text">
                SQLでデータベース、テーブルの作成、特定のデータを検索、
                SQL関数を使ってデータの集計ができます。  
              </p> 
            </div>
          </div>
          <div className="skill-item">
            <p className="skill-img"><img src={wordpress} alt="wordpress" /></p>
            <div className="skill-body">
              <h3 className="skill-name">WordPress</h3>
              <p className="skill-text">
                WordPress製の店舗HP・企業HP・メディアサイトなど、Webサイトを0から構築することが可能です。</p>
            </div>
          </div>
            <div className="skill-item">
              <p className="skill-img"><img src={photoshop} alt="photoshop" /></p>
              <div className="skill-body">
                <h3 className="skill-name">Adobe Photoshop</h3>
                <p className="skill-text">
                  Webサイトに必要不可欠なクリエイティブバナーを作ることが可能です。</p>
              </div>
            </div>
            <div className="skill-item">
              <p className="skill-img"><img src={figma} alt="figma" /></p>
              <div className="skill-body">
                <h3 className="skill-name">Figma</h3>
                <p className="skill-text">
                  Webサイトのワイヤーフレームやデザインカンプを作ることが可能です。</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default Skill