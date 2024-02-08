import '../css/skill.css'

const Skill = () => {
  return(
    <section>
      <div class="container">
          <h2 class="title">スキル</h2>
          <div class="skill-list">
            <div class="skill-item">
              <p class="skill-img"><img src="img/skills/html.png" alt="html" /></p>
              <div class="skill-body">
                <h3 class="skill-name">HTML</h3>
                <p class="skill-text">
                  Webページを作成するためのマークアップ言語でwebページを作成できます。
                </p>
              </div>
            </div>
            <div class="skill-item">
              <p class="skill-img"><a target="_blank" href="https://icons8.com"><img src="img/skills/icons8-css-480.png" alt="html" /></a></p>
              <div class="skill-body">
                <h3 class="skill-name">CSS</h3>
                <p class="skill-text">
                  Chrome のデベロッパーツールでデザインの微調整ができ、
                  idやclassを付与して目的のスタイルを充てることができます。<br />
                  CSSでレスポンシブデザインの実装もできます。
                </p>
              </div>
            </div>
            <div class="skill-item">
              <p class="skill-img"><img src="img/skills/js.png" alt="javascript" /></p>
              <div class="skill-body">
                <h3 class="skill-name">JavaScript</h3>
                <p class="skill-text">
                  動きのあるWebページを作る事が可能です。
                </p>
              </div>
            </div>
            <div class="skill-item">
              <p class="skill-img"><img src="img/skills/jquery.png" alt="jquery" /></p>
              <div class="skill-body">
                <h3 class="skill-name">jQuery</h3>
                <p class="skill-text">
                  JavaScriptのライブラリでJavaScriptを、簡潔に記述できます。<br />
                  version:jQuery3.7.1<br />
                </p>
              </div>
            </div>
            <div class="skill-item">
              <p class="skill-img"><a target="_blank" href="https://icons8.com/icon/123603/react-native"><img src="img/skills/icons8-react-native.svg" alt="React" /></a></p>
              <div class="skill-body">
                <h3 class="skill-name">React</h3>
                <p class="skill-text">
                  JavaScriptのライブラリでユーザーインターフェースを構築できます。<br />
                  version:18.2.0
                </p>
              </div>
            </div>
          <div class="skill-item">
            <p class="skill-img"><img src="img/skills/java_original_wordmark_logo_icon_146459.svg" alt="Java" /></p>
            <div class="skill-body">
              <h3 class="skill-name">Java</h3>
              <p class="skill-text">
                OSに依存しない汎用性の高さが魅力です。<br />
                基礎を習得し教材を使って民宿予約アプリを作成いたしました。<br />
                version:Java 21
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><a target="_blank" href="https://icons8.com/icon/90519/%E6%98%A5%E3%81%AE%E3%83%AD%E3%82%B4"><img src="img/skills/icons8-spring-logo.svg" alt="SpringBoot" /></a></p>
            <div class="skill-body">
              <h3 class="skill-name">SpringBoot</h3>
              <p class="skill-text">
                Javaのフレームワークです。<br />
                基礎を習得し教材を使って民宿予約アプリを作成いたしました。<br />
                version:3.2.1
              </p>
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="img/skills/icons8-php-80.png" alt="jquery" /></p>
            <div class="skill-body">
              <h3 class="skill-name">PHP</h3>
              <p class="skill-text">
                動的なWebページを作成するための機能を備えた言語です。<br />
                PHPの基礎を習得し教材を使って大学のホームページをWordPress化したり、
                教材を使って商品管理アプリを作成いたしました。<br />
                version:PHP 7.2.24
                </p> 
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><a target="_blank" href="https://icons8.com/icon/UFXRpPFebwa2/mysql-%E3%83%AD%E3%82%B4"><img src="img/skills/icons8-mysql.svg" alt="MySQL" /></a></p>
            <div class="skill-body">
              <h3 class="skill-name">MySQL</h3>
              <p class="skill-text">
                SQLでデータベース、テーブルの作成、特定のデータを検索、
                SQL関数を使ってデータの集計ができます。  
              </p> 
            </div>
          </div>
          <div class="skill-item">
            <p class="skill-img"><img src="img/skills/wordpress.png" alt="wordpress" /></p>
            <div class="skill-body">
              <h3 class="skill-name">WordPress</h3>
              <p class="skill-text">
                WordPress製の店舗HP・企業HP・メディアサイトなど、Webサイトを0から構築することが可能です。</p>
            </div>
          </div>
            <div class="skill-item">
              <p class="skill-img"><img src="img/skills/photoshop.png" alt="photoshop" /></p>
              <div class="skill-body">
                <h3 class="skill-name">Adobe Photoshop</h3>
                <p class="skill-text">
                  Webサイトに必要不可欠なクリエイティブバナーを作ることが可能です。</p>
              </div>
            </div>
            <div class="skill-item">
              <p class="skill-img"><img src="img/skills/icons8-figma-144.png" alt="adobexd" /></p>
              <div class="skill-body">
                <h3 class="skill-name">Figma</h3>
                <p class="skill-text">
                  Webサイトのワイヤーフレームやデザインカンプを作ることが可能です。</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default Skill