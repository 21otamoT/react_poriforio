import { Link } from "react-scroll";
import "../../../css/works.css";
import houseHold from "../../../img/works/details/house_hold.png";

const HouseHold = () => {
  return (
    <article className="article" id="move">
      <div>
        <h2 className="work-title">家計簿アプリ</h2>
        <div>
          <p className="img-container">
            <img src={houseHold} alt="家計簿アプリ" />
          </p>
          <h3>URL</h3>
          <p>
            <a
              href="https://21otamot.github.io/house_hold/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://21otamot.github.io/house_hold/
            </a>
          </p>
          <h3>使用技術</h3>
          <p>TypeScript/React/MUI/Firebase</p>
          <h3>開発の経緯・ストーリー</h3>
          <p>udemyの講座を参考に制作いたしました。</p>
          <h3>工夫や苦労した点</h3>
          <p>
            useContextを使ってpropsをグローバルに渡せるようにいたしました。
            <br />
            また、TypeScriptを使ったので型の定義によるエラーが多く、難しかったです。
          </p>
        </div>
      </div>
      <div className="works">
        <span className="material-symbols-outlined">&#9651;</span>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          作品一覧へ
        </Link>
      </div>
    </article>
  );
};

export default HouseHold;
