import { useState } from "react";
import "../../css/tabContent.css";
import Work4 from "../Works/Design/work4";
import Work5 from "../Works/Design/work5";
import Work7 from "../Works/Design/work7";
import Work8 from "../Works/Design/work8";
import PreloadImage from "../PreloadImage";
import { Link } from "react-scroll";
import photoshop from "../../img/works/photoshop.png";
import photoshop2 from "../../img/works/photshop2.png";
import kadai from "../../img/works/samurai_kadai_002.png";
import samurai from "../../img/works/xd.png";

const Design = () => {
  const [selectWork, setSelectWork] = useState(<Work4 />);

  const handleClick = (work) => {
    setSelectWork(work);
  };

  return (
    <>
      <div className="tab-contents">
        <Link
          activeClass="active"
          to="move"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleClick(<Work4 />)}
          className="works-item"
        >
          {/* 画像をプリロード */}
          <PreloadImage src={photoshop} />
          <div className="works-img">
            <img src={photoshop} alt="Photoshop" />
          </div>
          <p className="works-name">ITスクールのバナー</p>
          <p className="works-info">Photoshop</p>
        </Link>
        <Link
          activeClass="active"
          to="move"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleClick(<Work7 />)}
          className="works-item"
        >
          {/* 画像をプリロード */}
          <PreloadImage src={photoshop2} />
          <div className="works-img">
            <img src={photoshop2} alt="Photoshop" />
          </div>
          <p className="works-name">ITスクールのバナー</p>
          <p className="works-info">Photoshop</p>
        </Link>
        <Link
          activeClass="active"
          to="move"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleClick(<Work8 />)}
          className="works-item"
        >
          {/* 画像をプリロード */}
          <PreloadImage src={kadai} />
          <div className="works-img">
            <img src={kadai} alt="Figma" />
          </div>
          <p className="works-name">ITスクールのバナー</p>
          <p className="works-info">Figma</p>
        </Link>
        <Link
          activeClass="active"
          to="move"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => handleClick(<Work5 />)}
          className="works-item works-item-row-end"
        >
          {/* 画像をプリロード */}
          <PreloadImage src={samurai} />
          <div className="works-img">
            <img src={samurai} alt="Figma" />
          </div>
          <p className="works-name">ITスクールのLP</p>
          <p className="works-info">Figma</p>
        </Link>
      </div>
      {selectWork}
    </>
  );
};
export default Design;
